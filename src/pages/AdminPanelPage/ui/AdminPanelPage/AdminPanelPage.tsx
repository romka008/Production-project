import { useState } from "react";

interface IAdminPanelPageProps {
    className?: string;
}

// Интерфейсы для типов данных
interface Question {
    id: string;
    text: string;
    answers: Answer[];
    correctAnswerId: string;
}

interface Answer {
    id: string;
    text: string;
}

interface Test {
    title: string;
    id: string;
    questions: Question[];
}

export const TestForm: React.FC = () => {
    const [title, setTitle] = useState<string>("");
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState<Question>({
        id: generateUUID(),
        text: "",
        answers: [
            { id: generateUUID(), text: "" },
            { id: generateUUID(), text: "" },
        ],
        correctAnswerId: "",
    });

    const handleAddQuestion = () => {
        setQuestions([...questions, currentQuestion]);
        setCurrentQuestion({
            id: generateUUID(),
            text: "",
            answers: [
                { id: generateUUID(), text: "" },
                { id: generateUUID(), text: "" },
            ],
            correctAnswerId: "",
        });
    };

    const handleRemoveQuestion = (questionIndex: number) => {
        setQuestions(questions.filter((_, idx) => idx !== questionIndex));
    };

    const handleSaveTest = async () => {
        const newTestData: Test = {
            title,
            id: generateUUID(),
            questions,
        };

        try {
            // await axios.post("http://localhost:8000/create-test", newTestData);
            console.log(newTestData);
            alert("Тест успешно создан!");
        } catch (error) {
            console.error("Ошибка при создании теста:", error);
            alert("Произошла ошибка при создании теста. Попробуйте позже.");
        }
    };

    const renderQuestions = () => {
        return questions.map((question, index) => (
            <div key={question.id}>
                <h3>Вопрос #{index + 1}</h3>
                <p>Текст вопроса:</p>
                <input
                    type="text"
                    value={question.text}
                    onChange={e => {
                        const updatedQuestion = { ...question, text: e.target.value };
                        setQuestions([
                            ...questions.slice(0, index),
                            updatedQuestion,
                            ...questions.slice(index + 1),
                        ]);
                    }}
                />
                <p>Варианты ответов:</p>
                {renderAnswers(question, index)}
                <button onClick={() => handleAddAnswer(index)}>Добавить ответ</button>
                <button onClick={() => handleRemoveQuestion(index)}>Удалить вопрос</button>
            </div>
        ));
    };

    const renderAnswers = (question: Question, questionIndex: number) => {
        return question.answers.map((answer, answerIndex) => (
            <div key={answer.id}>
                <input
                    type="text"
                    value={answer.text}
                    onChange={e => {
                        const updatedAnswer = { ...answer, text: e.target.value };
                        const updatedQuestion = {
                            ...question,
                            answers: [
                                ...question.answers.slice(0, answerIndex),
                                updatedAnswer,
                                ...question.answers.slice(answerIndex + 1),
                            ],
                        };
                        setQuestions([
                            ...questions.slice(0, questionIndex),
                            updatedQuestion,
                            ...questions.slice(questionIndex + 1),
                        ]);
                    }}
                />
                <input
                    type="radio"
                    name={`question-${questionIndex}-correct-answer`}
                    value={answer.id}
                    checked={question.correctAnswerId === answer.id}
                    onChange={e => {
                        const updatedQuestion = { ...question, correctAnswerId: e.target.value };
                        setQuestions([
                            ...questions.slice(0, questionIndex),
                            updatedQuestion,
                            ...questions.slice(questionIndex + 1),
                        ]);
                    }}
                />
                {question.answers.length > 2 && (
                    <button onClick={() => handleRemoveAnswer(questionIndex, answerIndex)}>
                        Удалить ответ
                    </button>
                )}
            </div>
        ));
    };

    const handleAddAnswer = (questionIndex: number) => {
        const question = questions[questionIndex];
        const updatedQuestion = {
            ...question,
            answers: [...question.answers, { id: generateUUID(), text: "" }],
        };
        setQuestions([
            ...questions.slice(0, questionIndex),
            updatedQuestion,
            ...questions.slice(questionIndex + 1),
        ]);
    };

    const handleRemoveAnswer = (questionIndex: number, answerIndex: number) => {
        const question = questions[questionIndex];
        const updatedQuestion = {
            ...question,
            answers: question.answers.filter((_, idx) => idx !== answerIndex),
        };
        setQuestions([
            ...questions.slice(0, questionIndex),
            updatedQuestion,
            ...questions.slice(questionIndex + 1),
        ]);
    };

    return (
        <div data-testid="AdminPanelPage">
            <h2>Создать Тест</h2>
            <input
                type="text"
                placeholder="Название теста"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <hr />
            <h3>Вопросы</h3>
            {renderQuestions()}
            <button onClick={handleAddQuestion}>Добавить вопрос</button>
            <br />
            <button onClick={handleSaveTest}>Сохранить тест</button>
        </div>
    );
};

// Генерация UUID
function generateUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
