import { Article } from "../../../src/entities/Article";
import { selectByTestId } from "../../helpers/selectByTestId";

const defaultArticle = {
    title: "React Labs: над чем мы работаем – февраль 2024 г.",
    subtitle:
        "В публикациях React Labs мы пишем о проектах, находящихся в стадии активных исследований и разработок. Мы добились значительного прогресса с момента нашего последнего обновления и хотели бы поделиться своим прогрессом.",
    img: "https://devprac.ru/wp-content/uploads/2023/03/Learn-Reactjs.jpeg",
    views: 2357,
    createdAt: "15.02.2024",
    userId: "1",
    type: ["IT"],
    blocks: [],
};

export const createArticle = (article?: Article) => {
    return cy
        .request({
            method: "POST",
            url: `http://localhost:8000/articles`,
            headers: { Authorization: "qwerty" },
            body: article ?? defaultArticle,
        })
        .then(res => res.body);
};

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: "DELETE",
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: "qwerty" },
    });
};

export const getByTestId = (testId: string) => {
    return cy.get(selectByTestId(testId));
};

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
