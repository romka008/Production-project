import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { getArticleDetailsData } from "@/entities/Article";
import { getUserAuthData } from "@/entities/User";
import { fetchCommentByArticleId } from "../fetchCommentByArticleId/fetchCommentByArticleId";

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    "articleDetails/addCommentForArticle",
    async (text, { extra, dispatch, rejectWithValue, getState }) => {
        const userData = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
            console.log("Чего то не хватает");
            return rejectWithValue("no data");
        }

        try {
            const response = await extra.api.post<Comment>("/comments", {
                articleId: article.id,
                userId: userData.id,
                text,
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(fetchCommentByArticleId(article.id));

            return response.data;
        } catch (e) {
            return rejectWithValue("error");
        }
    }
);
