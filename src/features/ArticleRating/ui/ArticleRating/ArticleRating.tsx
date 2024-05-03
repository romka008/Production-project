import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { Rating } from "@/entities/Rating";
import { useGetArticleRatingQuery, useRateArticleMutation } from "../../api/articleRatingApi";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

export interface IArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = memo((props: IArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation("article");
    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetArticleRatingQuery({ userId: userData?.id ?? "", articleId });
    const [rateArticleMutation] = useRateArticleMutation();

    const handleRateArticle = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateArticleMutation({
                    userId: userData?.id ?? "",
                    articleId,
                    rate: starsCount,
                    feedback,
                });
            } catch (e) {
                // handle error
                console.log(e);
            }
        },
        [articleId, rateArticleMutation, userData?.id]
    );

    const handleAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRateArticle(starsCount, feedback);
        },
        [handleRateArticle]
    );

    const handleCancel = useCallback(
        (starsCount: number) => {
            handleRateArticle(starsCount);
        },
        [handleRateArticle]
    );

    if (isLoading) {
        return <Skeleton width={"100%"} height={120} />;
    }

    const rating = data?.[0];

    return (
        <Rating
            onAccept={handleAccept}
            onCancel={handleCancel}
            rate={rating?.rate}
            className={className}
            title={t("Оцените статью")}
            feedbackTitle={t("Оставьте свой отзыв о статье, это поможет улучшить качество")}
            hasFeedback
        ></Rating>
    );
});

export default ArticleRating;
