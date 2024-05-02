import type { Meta, StoryObj } from "@storybook/react";

import { ArticleList } from "./ArticleList";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Article } from "../../model/types/article";
import { ArticleBlockType } from "../..//model/consts/articleConstst";
import { ArticleType, ArticleView } from "../../model/consts/articleConstst";

const meta: Meta<typeof ArticleList> = {
    title: "entities/Article/ArticleList",
    component: ArticleList,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticleList>;

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
    args: {
        articles: new Array(9).fill(0).map((elem, index) => ({ ...article, id: String(index) })),
        view: ArticleView.LIST,
    },
    decorators: [
        StoreDecorator({
            articleDetails: {
                data: article,
            },
        }),
    ],
};

export const Plate: Story = {
    args: {
        articles: new Array(9).fill(0).map((elem, index) => ({ ...article, id: String(index) })),
    },
    decorators: [
        StoreDecorator({
            articleDetails: {
                data: article,
            },
        }),
    ],
};

export const LoadingPlate: Story = {
    args: { articles: [], isLoading: true, view: ArticleView.PLATE },
};

export const LoadingPlateDark: Story = {
    args: { articles: [], isLoading: true, view: ArticleView.PLATE },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const LoadingList: Story = {
    args: { articles: [], isLoading: true, view: ArticleView.LIST },
};

export const LoadingListDark: Story = {
    args: { articles: [], isLoading: true, view: ArticleView.LIST },
    decorators: [ThemeDecorator(Theme.DARK)],
};
