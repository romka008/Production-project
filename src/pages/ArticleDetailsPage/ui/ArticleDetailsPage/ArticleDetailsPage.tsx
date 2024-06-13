import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { classNames } from "@/shared/lib/classNames/classNames";
import {
    DynamicModuleLoader,
    ReducerList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { ArticleRecommendationsList } from "@/features/articleRecommendationsList";
import { VStack } from "@/shared/ui/deprecated/Stack";
import { ToggleFeatures } from "@/shared/lib/features";
import { Card } from "@/shared/ui/deprecated/Card";
import { Page } from "@/widgets/Page";
import { ArticleRating } from "@/features/ArticleRating";
import { ArticleDetails } from "@/entities/Article";
import { articleDetailsPageReducer } from "../../model/slices";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { ArticleDetailsComments } from "../ArticleDetailsComments/ArticleDetailsComments";

import styles from "./ArticleDetailsPage.module.scss";

const initialReducers: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = () => {
    const { t } = useTranslation("article");
    const { id } = useParams<{ id: string }>();

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
                    <ToggleFeatures
                        name="isArticleRatingEnabled"
                        on={<ArticleRating articleId={id} />}
                        off={
                            <Card style={{ color: "#fff" }}>
                                {t("Оценка статей скоро появится!")}
                            </Card>
                        }
                    />
                    {/* npm run remove-feature isArticleRatingEnabled on */}
                    {/* <ArticleRating articleId={id} /> */}

                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);

const ArticleRatingRedesigned = ({ articleId }: { articleId: string }) => {
    return <ArticleRating className={styles.ArticleRatingRedesigned} articleId={articleId} />;
};
