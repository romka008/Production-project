import React, { FC } from "react";
import { IArticleEditPageProps } from "./ArticleEditPage";

export const ArticleEditPageLazy = React.lazy<FC<IArticleEditPageProps>>(
    () => import("./ArticleEditPage")
);
