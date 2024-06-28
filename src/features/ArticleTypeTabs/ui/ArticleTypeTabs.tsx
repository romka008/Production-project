import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import { ITabItem, Tabs as TabsDeprecated } from "@/shared/ui/deprecated/Tabs";
import { ArticleType } from "@/entities/Article";

import styles from "./ArticleTypeTabs.module.scss";
import { ToggleFeatures } from "@/shared/lib/features";
import { Tabs } from "@/shared/ui/redesigned/Tabs";

interface IArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = ({ className, value, onChangeType }: IArticleTypeTabsProps) => {
    const { t } = useTranslation("article");
    const onTabClick = useCallback(
        (tab: ITabItem) => {
            onChangeType(tab.value as ArticleType);
        },
        [onChangeType]
    );

    const tabs = useMemo<ITabItem[]>(
        () => [
            {
                value: ArticleType.ALL,
                content: t("Все статьи"),
            },
            {
                value: ArticleType.IT,
                content: t("Айти"),
            },
            {
                value: ArticleType.ECONOMICS,
                content: t("Экономика"),
            },
            {
                value: ArticleType.SCIENCE,
                content: t("Наука"),
            },
        ],
        [t]
    );
    return (
        <ToggleFeatures
            name="isAppRedesigned"
            on={
                <Tabs
                    direction="column"
                    tabs={tabs}
                    value={value}
                    onTabClick={onTabClick}
                    className={classNames(styles.articleTypeTabs, {}, [className])}
                ></Tabs>
            }
            off={
                <TabsDeprecated
                    tabs={tabs}
                    value={value}
                    onTabClick={onTabClick}
                    className={classNames(styles.articleTypeTabs, {}, [className])}
                ></TabsDeprecated>
            }
        />
    );
};
