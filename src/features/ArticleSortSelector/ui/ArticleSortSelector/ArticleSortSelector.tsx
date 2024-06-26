import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Select, SelectOption } from "@/shared/ui/deprecated/Select";
import { SortOrder } from "@/shared/types/sort";
import { ArticleSortField } from "@/entities/Article";

import styles from "./ArticleSortSelector.module.scss";
import { ToggleFeatures } from "@/shared/lib/features";
import { ListBox } from "@/shared/ui/redesigned/Popups";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { Text } from "@/shared/ui/redesigned/Text";

export interface IArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

const ArticleSortSelector = ({
    className,
    sort,
    order,
    onChangeOrder,
    onChangeSort,
}: IArticleSortSelectorProps) => {
    const { t } = useTranslation("article");

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: "asc",
                content: t("возрастанию"),
            },
            {
                value: "desc",
                content: t("убыванию"),
            },
        ],
        [t]
    );
    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t("дате создания"),
            },
            {
                value: ArticleSortField.TITLE,
                content: t("названию"),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t("просмотрам"),
            },
        ],
        [t]
    );

    // вместо данного способа добавили дженерики в компонент Select
    // const changeSortHandler = useCallback(
    //     (newSort: string) => {
    //         onChangeSort(newSort as ArticleSortField);
    //     },
    //     [onChangeSort]
    // );

    // const changeOrderHandler = useCallback(
    //     (newOrder: string) => {
    //         onChangeOrder(newOrder as SortOrder);
    //     },
    //     [onChangeOrder]
    // );

    return (
        <ToggleFeatures
            name="isAppRedesigned"
            on={
                <div className={classNames(styles.articleSortSelectorRedesigned, {}, [className])}>
                    <VStack gap="8">
                        <Text text={t("Сортировать по")} />
                        {/* можно явно передавать тип */}
                        <ListBox<ArticleSortField>
                            items={sortFieldOptions}
                            value={sort}
                            onChange={onChangeSort}
                        />
                        <ListBox items={orderOptions} value={order} onChange={onChangeOrder} />
                    </VStack>
                </div>
            }
            off={
                <div className={classNames(styles.articleSortSelector, {}, [className])}>
                    <div className={styles.field}>
                        <label className={styles.label}>{t("Сортировать по")}</label>
                        {/* можно явно передавать тип */}
                        <Select<ArticleSortField>
                            options={sortFieldOptions}
                            value={sort}
                            onChange={onChangeSort}
                        />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label}>{t("по")}</label>
                        <Select options={orderOptions} value={order} onChange={onChangeOrder} />
                    </div>
                </div>
            }
        />
    );
};

export default ArticleSortSelector;
