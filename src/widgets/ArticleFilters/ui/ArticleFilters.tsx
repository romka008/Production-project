import { memo } from "react";
import { useTranslation } from "react-i18next";

import { Input } from "@/shared/ui/redesigned/Input";
import { SortOrder } from "@/shared/types/sort";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Card } from "@/shared/ui/redesigned/Card";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { ArticleSortSelector } from "@/features/ArticleSortSelector";
import { ArticleTypeTabs } from "@/features/ArticleTypeTabs";
import { ArticleSortField, ArticleType } from "@/entities/Article";

import styles from "./ArticleFilters.module.scss";

interface IArticleFiltersProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    type: ArticleType;
    search: string;
    onChangeSearch: (value: string) => void;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleFilters = memo(
    ({
        className,
        sort,
        order,
        type,
        search,
        onChangeSearch,
        onChangeOrder,
        onChangeSort,
        onChangeType,
    }: IArticleFiltersProps) => {
        const { t } = useTranslation("article");

        return (
            <Card padding="24" className={classNames(styles.articleFilters, {}, [className])}>
                <VStack gap="32">
                    <Input placeholder={t("Поиск")} value={search} onChange={onChangeSearch} />
                    <ArticleTypeTabs
                        className={styles.tabs}
                        value={type}
                        onChangeType={onChangeType}
                    />
                    <ArticleSortSelector
                        order={order}
                        sort={sort}
                        onChangeOrder={onChangeOrder}
                        onChangeSort={onChangeSort}
                    />
                </VStack>
            </Card>
        );
    }
);
