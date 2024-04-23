import type { Meta, StoryObj } from "@storybook/react";

import { ArticleListItem } from "./ArticleListItem";
import { Article } from "../../model/types/article";
import { ArticleBlockType, ArticleType, ArticleView } from "../../model/consts/articleConstst";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof ArticleListItem> = {
    title: "entities/Article/ArticleListItem",
    component: ArticleListItem,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticleListItem>;

const article: Article = {
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
    ],
};

export const List: Story = {
    args: { article: article, view: ArticleView.LIST },
};

export const ListDark: Story = {
    args: { article: article, view: ArticleView.LIST },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Plate: Story = {
    args: { article: article, view: ArticleView.PLATE },
};

export const PlateDark: Story = {
    args: { article: article, view: ArticleView.PLATE },
    decorators: [ThemeDecorator(Theme.DARK)],
};
