import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Comment } from "@/entities/Comment";

export const fetchCommentByArticleId = createAsyncThunk<
    Comment[],
    string | undefined,
    ThunkConfig<string>
>("article/fetchCommentByArticleId", async (articleId, { extra, rejectWithValue }) => {
    if (!articleId) {
        return rejectWithValue("error");
    }

    try {
        const response = await extra.api.get<Comment[]>(`/comments`, {
            // данный код необходим для получения сущности пользователя из "users" по "id" пользователя в "json-server"
            params: {
                articleId,
                _expand: "user",
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
