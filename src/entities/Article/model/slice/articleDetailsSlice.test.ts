import { articleDetailsReducer } from "./articleDetailsSlice";
import { fetchArticleById } from "../services/fetchArticleById/fetchArticleById";
import { Article, ArticleBlockType, ArticleType } from "../types/article";
import { ArticleDetailsSchema } from "../types/articleDetailsSchema";

const data: Article = {
    id: "1",
    title: "Javascript news",
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

describe("articleDetailsSlice.test", () => {
    test("test article service pending", () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
            error: undefined,
        };

        expect(
            articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.pending)
        ).toEqual({
            isLoading: true,
            error: undefined,
        });
    });

    test("test article service fulfilled", () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
            error: undefined,
        };

        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.fulfilled(data, "", "")
            )
        ).toEqual({
            data: data,
            isLoading: false,
        });
    });
});
