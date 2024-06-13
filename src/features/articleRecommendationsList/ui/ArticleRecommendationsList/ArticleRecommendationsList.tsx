import { memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Text, TextSize } from "@/shared/ui/deprecated/Text";
import { ArticleList } from "@/entities/Article";
import { VStack } from "@/shared/ui/deprecated/Stack";

import { useGetArticleRecommendationsListQuery } from "../../api/articleRecommendationsApi";

interface IArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: IArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation("article");
    const { data: articles, isLoading, isError } = useGetArticleRecommendationsListQuery(4);

    if (isError) {
        return <>При загрузке рекомендуемыx статей произошла ошибка</>;
    }

    return (
        <VStack
            data-testid="ArticleRecommendationsList"
            gap="8"
            className={classNames("", {}, [className])}
        >
            <Text size={TextSize.L} title={t("Рекомендуем")} />
            <ArticleList isLoading={isLoading} articles={articles} target="_blank" />
        </VStack>
    );
});
