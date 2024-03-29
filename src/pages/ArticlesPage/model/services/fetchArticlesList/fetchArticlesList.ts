import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "../../../../../entities/Article";
import { getArticlesPageLimit } from "../../selectors/articles";

interface FetchArticlesListProps {
    page?: number;
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListProps,
    ThunkConfig<string>
>("articlesPage/fetchArticlesList", async ({ page = 1 }, { extra, rejectWithValue, getState }) => {
    const perPage = getArticlesPageLimit(getState());
    try {
        const response = await extra.api.get<Article[]>(`/articles`, {
            // данный код необходим для получения сущности пользователя из "users" по "id" пользователя в "json-server"
            params: {
                _expand: "user",
                _page: page,
                _limit: perPage,
            },
        });

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        return rejectWithValue("error");
    }
});
