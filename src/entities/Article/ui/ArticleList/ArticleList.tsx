import { memo } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { Article, ArticleView } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";

import styles from "./ArticleList.module.scss";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSceleton";

interface IArticleListProps {
    articles: Article[];
    className?: string;
    isLoading?: boolean;
    view?: ArticleView;
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
    ({ articles, className, isLoading, view = ArticleView.PLATE }: IArticleListProps) => {
        if (isLoading) {
            return getSkeletons(view);
        }

        const renderArticle = (article: Article) => {
            return (
                <ArticleListItem
                    article={article}
                    view={view}
                    className={styles.card}
                    key={article.id}
                />
            );
        };
        return (
            <div className={classNames(styles.articleList, {}, [className, styles[view]])}>
                {articles.length > 0 ? articles.map(renderArticle) : null}
            </div>
        );
    }
);
