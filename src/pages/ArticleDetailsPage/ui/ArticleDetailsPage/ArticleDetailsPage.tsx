import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { classNames } from "shared/lib/classNames/classNames";
import { Text, TextSize } from "shared/ui/Text/Text";
import {
    DynamicModuleLoader,
    ReducerList,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import { useInitialEffect } from "shared/lib/hooks/UseInitialEffect/UseInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { VStack } from "shared/ui/Stack";
import { Page } from "widgets/Page/Page";
import { AddNewComment } from "features/AddNewComment";
import { ArticleDetails, ArticleList } from "../../../../entities/Article";
import { CommentList } from "../../../../entities/Comment";
import { getArticleComments } from "../../model/slices/ArticleDetailsCommentsSlice";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { fetchCommentByArticleId } from "../../model/services/fetchCommentByArticleId/fetchCommentByArticleId";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticleaddCommentForArticle";
import { getArticleRecommendations } from "../../model/slices/ArticleDetailsPageRecommendationsSlice";
import { getArticleRecommendationsIsLoading } from "../../model/selectors/recommendations";
import { fetchArticleRecommendations } from "../../model/services/fetchArticleRecommendations/fetchArticleRecommendations";
import { articleDetailsPageReducer } from "../../model/slices";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";

import styles from "./ArticleDetailsPage.module.scss";

const initialReducers: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = () => {
    const { t } = useTranslation("article");
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch]
    );

    useInitialEffect(() => {
        dispatch(fetchCommentByArticleId(id));
        dispatch(fetchArticleRecommendations());
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
            <Page className={classNames(styles.articleDetailsPage, {}, [])}>
                <VStack gap="16">
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <Text
                        size={TextSize.L}
                        className={styles.commentTitle}
                        title={t("Рекомендуем")}
                    />
                    <ArticleList
                        className={styles.recommendations}
                        articles={recommendations}
                        isLoading={recommendationsIsLoading}
                        target="_blank"
                    />
                    <Text
                        size={TextSize.L}
                        className={styles.commentTitle}
                        title={t("Комментарии")}
                    />
                    <AddNewComment onSendComment={onSendComment} />
                    <CommentList comments={comments} isLoading={commentsIsLoading} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
