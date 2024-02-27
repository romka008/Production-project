import type { Meta, StoryObj } from "@storybook/react";

import { ArticleDetails } from "./ArticleDetails";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Article, ArticleBlockType, ArticleType } from "../../model/types/article";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof ArticleDetails> = {
    title: "entities/Article/ArticleDetails",
    component: ArticleDetails,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

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
        {
            id: "4",
            type: ArticleBlockType.CODE,
            code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>",
        },
        {
            id: "5",
            type: ArticleBlockType.TEXT,
            title: "Заголовок второго блока",
            paragraphs: [
                "Здесь нас больше всего интересует строчка document.getElementById(\"hello\").innerHTML = \"Hello, world!\";, представляющая собой JS-код. Этот код заключён в открывающий и закрывающий теги <script>. Он находит в документе HTML-элемент с идентификатором hello и меняет его свойство innerHTML (то есть — тот HTML код, который содержится внутри этого элемента) на Hello, world!. Если открыть файл hello.html в браузере, на ней будет выведен заданный текст.",
            ],
        },
        {
            id: "6",
            type: ArticleBlockType.IMAGE,
            title: "Сообщение, выведенное средствами JavaScript в HTML-элемент",
            src: "https://habrastorage.org/r/w1560/getpro/habr/post_images/465/185/884/465185884cda3070549c035a37a7a3e8.png",
        },
        {
            id: "7",
            type: ArticleBlockType.TEXT,
            title: "Заголовок третьего блока",
            paragraphs: [
                "Как уже говорилось, примеры, приводимые на сайте w3school.com, можно тут же и попробовать. Существуют и специализированные онлайн-среды для веб-разработки, и, в частности, для выполнения JS-кода. Среди них, например codepen.io, jsfiddle.net, jsbin.com.",
            ],
        },
        {
            id: "8",
            type: ArticleBlockType.IMAGE,
            title: "Вывод сообщения в окне",
            src: "https://habrastorage.org/r/w1560/getpro/habr/post_images/757/2da/ce9/7572dace9bf67861dcdc2f9539c0810d.png",
        },
        {
            id: "9",
            type: ArticleBlockType.TEXT,
            title: "Заголовок четвертого блока",
            paragraphs: [
                "Обратите внимание на то, что панель инструментов разработчика расположена теперь в нижней части экрана. Менять её расположение можно, воспользовавшись меню с тремя точками в её заголовке и выбирая соответствующую пиктограмму. Там же можно найти и кнопку для закрытия этой панели.",
                "Инструменты разработчика, и, в том числе, консоль, имеются и в других браузерах. Консоль хороша тем, что она, когда вы пользуетесь браузером, всегда под рукой.",
            ],
        },
        {
            id: "10",
            type: ArticleBlockType.TEXT,
            title: "Заголовок пятого блока",
            paragraphs: [
                "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
            ],
        },
        {
            id: "11",
            type: ArticleBlockType.CODE,
            code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>",
        },
        {
            id: "12",
            type: ArticleBlockType.TEXT,
            paragraphs: [
                "Здесь нас больше всего интересует строчка document.getElementById(\"hello\").innerHTML = \"Hello, world!\";, представляющая собой JS-код. Этот код заключён в открывающий и закрывающий теги <script>. Он находит в документе HTML-элемент с идентификатором hello и меняет его свойство innerHTML (то есть — тот HTML код, который содержится внутри этого элемента) на Hello, world!. Если открыть файл hello.html в браузере, на ней будет выведен заданный текст.",
            ],
        },
        {
            id: "13",
            type: ArticleBlockType.IMAGE,
            title: "Сообщение, выведенное средствами JavaScript в HTML-элемент",
            src: "https://habrastorage.org/r/w1560/getpro/habr/post_images/465/185/884/465185884cda3070549c035a37a7a3e8.png",
        },
    ],
};

export const Primary: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            articleDetails: {
                data: article
            },
        }),
    ],
};

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            articleDetails: {
                data: article
            },
        }),
    ],
};

export const Error: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            articleDetails: {
                error: "error"
            },
        }),
    ],
};

export const Loading: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            articleDetails: {
                isLoading: true
            },
        }),
    ],
};

export const ErrorDark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            articleDetails: {
                error: "error"
            },
        }),
    ],
};

export const LoadingDark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            articleDetails: {
                isLoading: true
            },
        }),
    ],
};