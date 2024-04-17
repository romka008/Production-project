import { useSelector } from "react-redux";

import { ArticleList } from "../../../../entities/Article";
import { getArticles } from "../../model/slices/articlesPageSlice";
import {
    getArticlesPageIsError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from "../../model/selectors/articles";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";

interface IArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = ({ className }: IArticleInfiniteListProps) => {
    const { t } = useTranslation("article");
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const articlesView = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageIsError);

    if (error) {
        return <Text text={t("Ошибка при загрузке статей")} />;
    }

    return (
        <ArticleList
            view={articlesView}
            articles={articles}
            isLoading={isLoading}
            className={className}
            // articles={new Array(16)
            //     .fill(0)
            //     .map((el, index) => ({ ...article, id: String(index) }))}
        />
    );
};
