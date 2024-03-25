import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getArticlesPageInited } from "../../selectors/articles";
import { articlePageActions } from "../../slices/articlesPageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    "articlesPage/initArticlesPage",
    async (_, { getState, dispatch }) => {
        const inited = getArticlesPageInited(getState());

        if (!inited) {
            dispatch(articlePageActions.initView());
            dispatch(fetchArticlesList({ page: 1 }));
        }
    }
);
