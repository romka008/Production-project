import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

import { classNames } from "shared/lib/classNames/classNames";
import { Text, TextSize } from "shared/ui/Text/Text";
import {
    DynamicModuleLoader,
    ReducerList,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import { useInitialEffect } from "shared/lib/hooks/UseInitialEffect/UseInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button } from "shared/ui/Button/Button";
import { RouterPath } from "shared/config/routerConfig/routerConfig";
import { Page } from "widgets/Page/Page";
import { AddNewComment } from "features/AddNewComment";
import { ArticleDetails, ArticleList } from "../../../../entities/Article";
import { CommentList } from "../../../../entities/Comment";
import {
    ArticleDetailsCommentReducer,
    getArticleComments,
} from "../../model/slices/ArticleDetailsCommentsSlice";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { fetchCommentByArticleId } from "../../model/services/fetchCommentByArticleId/fetchCommentByArticleId";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticleaddCommentForArticle";

import styles from "./ArticleDetailsPage.module.scss";
import {
    ArticleDetailsPageRecommendationsReducer,
    getArticleRecommendations,
} from "../../model/slices/ArticleDetailsPageRecommendationsSlice";
import {
    getArticleRecommendationsIsError,
    getArticleRecommendationsIsLoading,
} from "../../model/selectors/recommendations";
import { fetchArticleRecommendations } from "../../model/services/fetchArticleRecommendations/fetchArticleRecommendations";
import { articleDetailsPageReducer } from "../../model/slices";

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

    const navigate = useNavigate();

    const onBackToList = useCallback(() => {
        navigate(RouterPath.articles);
    }, [navigate]);

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
                <Button onClick={onBackToList}>{t("Назад к списку")}</Button>
                <ArticleDetails id={id} />
                <Text size={TextSize.L} className={styles.commentTitle} title={t("Рекомендуем")} />
                <ArticleList
                    className={styles.recommendations}
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    target="_blank"
                />
                <Text size={TextSize.L} className={styles.commentTitle} title={t("Комментарии")} />
                <AddNewComment onSendComment={onSendComment} />
                <CommentList comments={comments} isLoading={commentsIsLoading} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
