import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

import {
    DynamicModuleLoader,
    ReducerList,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/UseInitialEffect/UseInitialEffect";
import { Page } from "widgets/Page/Page";
import { fetchNextArticlesPage } from "pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { ArticleList } from "../../../../entities/Article";
import { ArticlePageReducer, getArticles } from "../../model/slices/articlesPageSlice";
import { getArticlesPageIsLoading, getArticlesPageView } from "../../model/selectors/articles";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";
import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters";

import styles from "./ArticlesPage.module.scss";

const initialReducers: ReducerList = {
    articlesPage: ArticlePageReducer,
};

const ArticlesPage = () => {
    const { t } = useTranslation("article");
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const articlesView = useSelector(getArticlesPageView);
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={false}>
            <Page onScrollEnd={onLoadNextPart}>
                <ArticlesPageFilters />
                <ArticleList
                    view={articlesView}
                    articles={articles}
                    isLoading={isLoading}
                    className={styles.list}
                    // articles={new Array(16)
                    //     .fill(0)
                    //     .map((el, index) => ({ ...article, id: String(index) }))}
                />
                {/* <ArticleList articles={[article]} /> */}
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);

// const article = {
//     id: "1",
//     title: "Javascript news",
//     user: {
//         id: "1",
//         username: "Ivan",
//         avatar: "http://klubmama.ru/uploads/posts/2022-08/1661819225_44-klubmama-ru-p-kot-v-sapogakh-podelka-foto-44.jpg",
//     },
//     subtitle: "Что нового в JS за 2023 год",
//     img: "https://pnggallery.com/wp-content/uploads/javascript-logo-04.png",
//     views: 1022,
//     createdAt: "12.05.2023",
//     type: [ArticleType.IT, ArticleType.ECONOMICS, ArticleType.SCIENCE],
//     blocks: [
//         {
//             id: "1",
//             type: ArticleBlockType.TEXT,
//             title: "Hello, world!",
//             paragraphs: [
//                 "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
//                 "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
//                 "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>.",
//             ],
//         },
//         {
//             id: "4",
//             type: ArticleBlockType.CODE,
//             code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>',
//         },
//         {
//             id: "5",
//             type: ArticleBlockType.TEXT,
//             title: "Заголовок второго блока",
//             paragraphs: [
//                 'Здесь нас больше всего интересует строчка document.getElementById("hello").innerHTML = "Hello, world!";, представляющая собой JS-код. Этот код заключён в открывающий и закрывающий теги <script>. Он находит в документе HTML-элемент с идентификатором hello и меняет его свойство innerHTML (то есть — тот HTML код, который содержится внутри этого элемента) на Hello, world!. Если открыть файл hello.html в браузере, на ней будет выведен заданный текст.',
//             ],
//         },
//         {
//             id: "6",
//             type: ArticleBlockType.IMAGE,
//             title: "Сообщение, выведенное средствами JavaScript в HTML-элемент",
//             src: "https://habrastorage.org/r/w1560/getpro/habr/post_images/465/185/884/465185884cda3070549c035a37a7a3e8.png",
//         },
//         {
//             id: "7",
//             type: ArticleBlockType.TEXT,
//             title: "Заголовок третьего блока",
//             paragraphs: [
//                 "Как уже говорилось, примеры, приводимые на сайте w3school.com, можно тут же и попробовать. Существуют и специализированные онлайн-среды для веб-разработки, и, в частности, для выполнения JS-кода. Среди них, например codepen.io, jsfiddle.net, jsbin.com.",
//             ],
//         },
//         {
//             id: "8",
//             type: ArticleBlockType.IMAGE,
//             title: "Вывод сообщения в окне",
//             src: "https://habrastorage.org/r/w1560/getpro/habr/post_images/757/2da/ce9/7572dace9bf67861dcdc2f9539c0810d.png",
//         },
//         {
//             id: "9",
//             type: ArticleBlockType.TEXT,
//             title: "Заголовок четвертого блока",
//             paragraphs: [
//                 "Обратите внимание на то, что панель инструментов разработчика расположена теперь в нижней части экрана. Менять её расположение можно, воспользовавшись меню с тремя точками в её заголовке и выбирая соответствующую пиктограмму. Там же можно найти и кнопку для закрытия этой панели.",
//                 "Инструменты разработчика, и, в том числе, консоль, имеются и в других браузерах. Консоль хороша тем, что она, когда вы пользуетесь браузером, всегда под рукой.",
//             ],
//         },
//         {
//             id: "10",
//             type: ArticleBlockType.TEXT,
//             title: "Заголовок пятого блока",
//             paragraphs: [
//                 "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
//             ],
//         },
//         {
//             id: "11",
//             type: ArticleBlockType.CODE,
//             code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>',
//         },
//         {
//             id: "12",
//             type: ArticleBlockType.TEXT,
//             paragraphs: [
//                 'Здесь нас больше всего интересует строчка document.getElementById("hello").innerHTML = "Hello, world!";, представляющая собой JS-код. Этот код заключён в открывающий и закрывающий теги <script>. Он находит в документе HTML-элемент с идентификатором hello и меняет его свойство innerHTML (то есть — тот HTML код, который содержится внутри этого элемента) на Hello, world!. Если открыть файл hello.html в браузере, на ней будет выведен заданный текст.',
//             ],
//         },
//         {
//             id: "13",
//             type: ArticleBlockType.IMAGE,
//             title: "Сообщение, выведенное средствами JavaScript в HTML-элемент",
//             src: "https://habrastorage.org/r/w1560/getpro/habr/post_images/465/185/884/465185884cda3070549c035a37a7a3e8.png",
//         },
//     ],
// } as Article;
