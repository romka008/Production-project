import { ArticleFilters } from "@/widgets/ArticleFilters";
import { useArticleFilters } from "../ArticlesPage/lib/hooks/useArticleFilters";
import { memo } from "react";

interface IFiltersContainerProps {
    className?: string;
}

export const FiltersContainer = memo(({ className }: IFiltersContainerProps) => {
    const { order, sort, search, type, onChangeOrder, onChangeSort, onChangeSearch, onChangeType } =
        useArticleFilters();
    return (
        <ArticleFilters
            order={order}
            sort={sort}
            search={search}
            type={type}
            onChangeOrder={onChangeOrder}
            onChangeSort={onChangeSort}
            onChangeSearch={onChangeSearch}
            onChangeType={onChangeType}
            className={className}
        />
    );
});
