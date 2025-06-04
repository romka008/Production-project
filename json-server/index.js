const fs = require("fs");
const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();

// eslint-disable-next-line no-undef
const router = jsonServer.router(path.resolve(__dirname, "db.json"));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
    await new Promise(res => {
        setTimeout(res, 800);
    });
    next();
});

// Эндпоинт для логина
server.post("/login", (req, res) => {
    try {
        const { username, password } = req.body;
        // eslint-disable-next-line no-undef
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, "db.json"), "UTF-8"));
        const { users = [] } = db;

        const userFromBd = users.find(
            user => user.username === username && user.password === password
        );

        if (userFromBd) {
            return res.json(userFromBd);
        }

        return res.status(403).json({ message: "User not found" });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

// Эндпоинт для создания теста
server.post("/create-test", (req, res) => {
    try {
        const { title, id, questions } = req.body;
        const modifiedResponseData = {
            ...req.body,
            questions: req.body.questions.map(question => ({
                id: question.id,
                text: question.text,
                answers: question.answers,
            })),
        };

        // Читаем db.json
        const dbPath = path.resolve(__dirname, "db.json");
        const dbRaw = fs.readFileSync(dbPath, "utf8");
        let db = JSON.parse(dbRaw);

        // Добавляем тест в коллекцию "testList"
        db.testList.push(modifiedResponseData);

        // Добавляем заголовок теста в коллекцию "tests"
        db.tests.push({
            title: title,
            id: id, // этот id должен быть уникальным, нужно написать функцию, которая будет генерить уникальные id или использовать библ. uuid
            testId: id,
        });

        // Добавляем правильные ответы в коллекцию "answers"
        questions.forEach(question => {
            db.answers.push({
                id: question.correctAnswerId, // этот id должен быть уникальным, нужно написать функцию, которая будет генерить уникальные id или использовать библ. uuid
                answerId: question.correctAnswerId,
                questionId: question.id,
            });
        });

        // Перезаписываем db.json
        fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

        return res.json({ success: true });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: err.message });
    }
});

// проверяем, авторизован ли пользователь
// eslint-disable-next-line
server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: "AUTH ERROR" });
    }

    next();
});

server.use(router);

// запуск сервера
server.listen(8000, () => {
    console.log("server is running on 8000 port");
});
