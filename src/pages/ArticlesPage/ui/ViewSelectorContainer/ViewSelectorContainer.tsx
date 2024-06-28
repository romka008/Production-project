import { memo } from "react";

import { ArticleListViewSelector } from "@/features/ArticleListViewSelector";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useArticleFilters } from "../ArticlesPage/lib/hooks/useArticleFilters";

import styles from "./ViewSelectorContainer.module.scss";

interface IViewSelectorContainerProps {
    className?: string;
}

export const ViewSelectorContainer = memo(({ className }: IViewSelectorContainerProps) => {
    const { view, onChangeView } = useArticleFilters();

    return (
        <div className={classNames(styles.viewSelectorContainer, {}, [className])}>
            <ArticleListViewSelector view={view} onViewClick={onChangeView} />
        </div>
    );
});
