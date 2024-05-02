import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Text, TextSize } from "@/shared/ui/Text/Text";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "@/shared/lib/hooks/UseInitialEffect/UseInitialEffect";
import { AddNewComment } from "@/features/AddNewComment";
import { CommentList } from "@/entities/Comment";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticleaddCommentForArticle";
import { getArticleComments } from "../../model/slices/ArticleDetailsCommentsSlice";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { fetchCommentByArticleId } from "../../model/services/fetchCommentByArticleId/fetchCommentByArticleId";

import styles from "./ArticleDetailsComments.module.scss";

interface IArticleDetailsCommentsProps {
    className?: string;
    id: string;
}

export const ArticleDetailsComments = ({ className, id }: IArticleDetailsCommentsProps) => {
    const { t } = useTranslation("article");
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch]
    );

    useInitialEffect(() => {
        dispatch(fetchCommentByArticleId(id));
    });

    return (
        <>
            <Text size={TextSize.L} className={styles.commentTitle} title={t("Комментарии")} />
            <AddNewComment onSendComment={onSendComment} />
            <CommentList comments={comments} isLoading={commentsIsLoading} />
        </>
    );
};
