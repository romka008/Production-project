import React, { FC } from "react";
import { IAddNewCommentProps } from "./AddNewComment";

export const AddNewCommentLazy = React.lazy<FC<IAddNewCommentProps>>(
    () =>
        new Promise(resolve => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // В РЕАЛЬНЫХ ПРОЕКТАХ ТАК НЕ ДЕЛАТЬ!!!! ТОЛЬКО ДЛЯ ДАННОГО КУРСА
            setTimeout(() => resolve(import("./AddNewComment")), 1500);
        })
);
