import { HTMLAttributeAnchorTarget, memo } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { Article, ArticleView } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";

import styles from "./ArticleList.module.scss";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSceleton";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";

interface IArticleListProps {
    articles: Article[];
    className?: string;
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => {
    return (
        <div className={classNames(styles.articleList, {}, [styles[view]])}>
            {new Array(view === ArticleView.PLATE ? 9 : 3).fill(0).map((article, index) => (
                <ArticleListItemSkeleton key={index} view={view} className={styles.card} />
            ))}
        </div>
    );
};

export const ArticleList = memo(
    ({ articles, className, isLoading, view = ArticleView.PLATE, target }: IArticleListProps) => {
        const { t } = useTranslation("article");
        const renderArticle = (article: Article) => {
            return (
                <ArticleListItem
                    article={article}
                    view={view}
                    target={target}
                    className={styles.card}
                    key={article.id}
                />
            );
        };

        if (!isLoading && !articles.length) {
            return (
                <div className={classNames(styles.articleList, {}, [className, styles[view]])}>
                    <Text title={t("Статьи не найдены")} />
                </div>
            );
        }
        return (
            <div className={classNames(styles.articleList, {}, [className, styles[view]])}>
                {articles.length > 0 ? articles.map(renderArticle) : null}
                {isLoading && getSkeletons(view)}
            </div>
        );
    }
);
