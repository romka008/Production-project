import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "app/providers/StoreProvider";

import { Article } from "../../../../../entities/Article";

export const fetchArticleRecommendations = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    "articleDetailPage/fetchArticleRecommendation",
    async (_, { extra, rejectWithValue, getState }) => {
        try {
            const response = await extra.api.get<Article[]>(`/articles`, {
                // данный код необходим для получения сущности пользователя из "users" по "id" пользователя в "json-server"
                params: {
                    _limit: 4,
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue("error");
        }
    }
);
