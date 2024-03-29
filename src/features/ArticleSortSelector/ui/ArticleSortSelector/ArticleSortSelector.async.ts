import React, { FC } from "react";
import { IArticleSortSelectorProps } from "./ArticleSortSelector";

export const ArticleSortSelectorLazy = React.lazy<FC<IArticleSortSelectorProps>>(
    () =>
        new Promise(resolve => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // В РЕАЛЬНЫХ ПРОЕКТАХ ТАК НЕ ДЕЛАТЬ!!!! ТОЛЬКО ДЛЯ ДАННОГО КУРСА
            setTimeout(() => resolve(import("./ArticleSortSelector")), 1500);
        })
);
