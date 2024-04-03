import React, { FC } from "react";
import { IAddNewCommentProps } from "./AddNewComment";

export const AddNewCommentLazy = React.lazy<FC<IAddNewCommentProps>>(
    () => import("./AddNewComment")
);
