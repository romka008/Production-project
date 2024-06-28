import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Card } from "@/shared/ui/deprecated/Card";
import { Input } from "@/shared/ui/deprecated/Input";
import { ArticleSortSelector } from "@/features/ArticleSortSelector";
import { ArticleTypeTabs } from "@/features/ArticleTypeTabs";
import { ArticleListViewSelector } from "@/features/ArticleListViewSelector";
import { useArticleFilters } from "../ArticlesPage/lib/hooks/useArticleFilters";

import styles from "./ArticlesPageFilters.module.scss";

interface IArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = ({ className }: IArticlesPageFiltersProps) => {
    const { t } = useTranslation("article");

    const {
        view,
        order,
        sort,
        search,
        type,
        onChangeView,
        onChangeOrder,
        onChangeSort,
        onChangeSearch,
        onChangeType,
    } = useArticleFilters();

    return (
        <div className={classNames(styles.articlesPageFilters, {}, [className])}>
            <div className={styles.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleListViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={styles.search}>
                <Input placeholder={t("Поиск")} value={search} onChange={onChangeSearch} />
            </Card>
            <ArticleTypeTabs className={styles.tabs} value={type} onChangeType={onChangeType} />
        </div>
    );
};
