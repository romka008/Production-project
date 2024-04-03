import React, { FC } from "react";
import { IArticleSortSelectorProps } from "./ArticleSortSelector";

export const ArticleSortSelectorLazy = React.lazy<FC<IArticleSortSelectorProps>>(
    () => import("./ArticleSortSelector")
);
