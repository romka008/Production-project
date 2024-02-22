import { memo } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text/Text";
import {
    DynamicModuleLoader,
    ReducerList,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import { useInitialEffect } from "shared/lib/hooks/UseInitialEffect/UseInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ArticleDetails } from "../../../../entities/Article";
import { CommentList } from "../../../../entities/Comment";
import {
    ArticleDetailsCommentReducer,
    getArticleComments,
} from "../../model/slices/ArticleDetailsCommentsSlice";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { fetchCommentByArticleId } from "../../model/services/fetchCommentBeArticleId/fetchCommentByArticleId";

import styles from "./ArticleDetailsPage.module.scss";

const initialReducers: ReducerList = {
    articleDetailsComments: ArticleDetailsCommentReducer,
};

const ArticleDetailsPage = () => {
    const { t } = useTranslation("article");
    const { id } = useParams<{ id: string }>();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchCommentByArticleId(id));
    });

    if (!id) {
        return (
            <div className={classNames(styles.articleDetailsPage, {}, [])}>
                {t("Статья не найдена")}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(styles.articleDetailsPage, {}, [])}>
                <ArticleDetails id={id} />
                <Text className={styles.commentTitle} title={t("Комментарии")} />
                <CommentList comments={comments} isLoading={commentsIsLoading} />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
