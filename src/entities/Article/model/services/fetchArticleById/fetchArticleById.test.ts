import { fetchArticleById } from "./fetchArticleById";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Article } from "../../types/article";
import { ArticleBlockType } from "../../consts/articleConstst";
import { ArticleType } from "../../consts/articleConstst";

const data: Article = {
    id: "1",
    title: "Javascript news",
    user: {
        id: "1",
        username: "Ivan",
        avatar: "http://klubmama.ru/uploads/posts/2022-08/1661819225_44-klubmama-ru-p-kot-v-sapogakh-podelka-foto-44.jpg",
    },
    subtitle: "Что нового в JS за 2023 год",
    img: "https://pnggallery.com/wp-content/uploads/javascript-logo-04.png",
    views: 1022,
    createdAt: "12.05.2023",
    type: [ArticleType.IT],
    blocks: [
        {
            id: "1",
            type: ArticleBlockType.TEXT,
            title: "Hello, world!",
            paragraphs: [
                "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>.",
            ],
        },
        {
            id: "6",
            type: ArticleBlockType.IMAGE,
            title: "Сообщение, выведенное средствами JavaScript в HTML-элемент",
            src: "https://habrastorage.org/r/w1560/getpro/habr/post_images/465/185/884/465185884cda3070549c035a37a7a3e8.png",
        },
    ],
};

describe("fetchArticleById.test", () => {
    test("success", async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk("1");

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });

    test("success error", async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockRejectedValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk("1");

        expect(result.meta.requestStatus).toBe("rejected");
    });
});
