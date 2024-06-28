import { useCallback } from "react";
import { useSelector } from "react-redux";

import { ArticleSortField, ArticleType, ArticleView } from "@/entities/Article";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useDebounce } from "@/shared/lib/hooks/useDebounce/useDebounce";
import { SortOrder } from "@/shared/types/sort";
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from "../../../../model/selectors/articles";
import { fetchArticlesList } from "../../../../model/services/fetchArticlesList/fetchArticlesList";
import { articlePageActions } from "../../../../model/slices/articlesPageSlice";

export const useArticleFilters = () => {
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const order = useSelector(getArticlesPageOrder);
    const sort = useSelector(getArticlesPageSort);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlePageActions.setView(view));
        },
        [dispatch]
    );
    const onChangeOrder = useCallback(
        (newOrder: SortOrder) => {
            dispatch(articlePageActions.setOrder(newOrder));
            dispatch(articlePageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData]
    );
    const onChangeSort = useCallback(
        (newSort: ArticleSortField) => {
            dispatch(articlePageActions.setSort(newSort));
            dispatch(articlePageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData]
    );
    const onChangeSearch = useCallback(
        (text: string) => {
            dispatch(articlePageActions.setSearch(text));
            dispatch(articlePageActions.setPage(1));
            debouncedFetchData();
        },
        [dispatch, debouncedFetchData]
    );
    const onChangeType = useCallback(
        (value: ArticleType) => {
            dispatch(articlePageActions.setType(value));
            dispatch(articlePageActions.setPage(1));
            debouncedFetchData();
        },
        [dispatch, debouncedFetchData]
    );

    return {
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
    };
};
