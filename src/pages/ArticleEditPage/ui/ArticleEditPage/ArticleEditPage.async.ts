import React, { FC } from "react";
import { IArticleEditPageProps } from "./ArticleEditPage";

export const ArticleEditPageLazy = React.lazy<FC<IArticleEditPageProps>>(
    () =>
        new Promise(resolve => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // В РЕАЛЬНЫХ ПРОЕКТАХ ТАК НЕ ДЕЛАТЬ!!!! ТОЛЬКО ДЛЯ ДАННОГО КУРСА
            setTimeout(() => resolve(import("./ArticleEditPage")), 400);
        })
);
