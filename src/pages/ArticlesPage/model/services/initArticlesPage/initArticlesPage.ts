import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { SortOrder } from "@/shared/types";
import { getArticlesPageInited } from "../../selectors/articles";
import { articlePageActions } from "../../slices/articlesPageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { ArticleSortField, ArticleType } from "@/entities/Article";

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    "articlesPage/initArticlesPage",
    async (searchParams, { getState, dispatch }) => {
        const inited = getArticlesPageInited(getState());

        if (!inited) {
            const orderFromUrl = searchParams.get("order") as SortOrder;
            const sortFromUrl = searchParams.get("sort") as ArticleSortField;
            const searchFromUrl = searchParams.get("search");
            const typeFromUrl = searchParams.get("type") as ArticleType;

            if (orderFromUrl) {
                dispatch(articlePageActions.setOrder(orderFromUrl));
            }
            if (sortFromUrl) {
                dispatch(articlePageActions.setSort(sortFromUrl));
            }
            if (searchFromUrl) {
                dispatch(articlePageActions.setSearch(searchFromUrl));
            }
            if (typeFromUrl) {
                dispatch(articlePageActions.setType(typeFromUrl));
            }

            dispatch(articlePageActions.initView());
            dispatch(fetchArticlesList({}));
        }
    }
);
