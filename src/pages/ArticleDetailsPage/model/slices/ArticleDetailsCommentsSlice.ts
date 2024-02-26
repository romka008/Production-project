import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { StateSchema } from "app/providers/StoreProvider";
import { Comment } from "../../../../entities/Comment";
import { ArticleDetalsCommentsSchema } from "../types/ArticleDetailsCommentsSchema";
import { fetchCommentByArticleId } from "../services/fetchCommentByArticleId/fetchCommentByArticleId";

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment: Comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    state => state.articleDetailsComments || commentsAdapter.getInitialState()
);

const ArticleDetailsCommentsSlice = createSlice({
    name: "ArticleDetailsCommentsSlice",
    initialState: commentsAdapter.getInitialState<ArticleDetalsCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {
        // Can pass adapter functions directly as case reducers.  Because we're passing this
        // as a value, `createSlice` will auto-generate the `bookAdded` action type / creator
        bookAdded: commentsAdapter.addOne,
        booksReceived(state, action) {
            // Or, call them as "mutating" helpers in a case reducer
            commentsAdapter.setAll(state, action.payload.books);
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCommentByArticleId.pending, state => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchCommentByArticleId.fulfilled,
                (state, action: PayloadAction<Comment[]>) => {
                    state.isLoading = false;
                    commentsAdapter.setAll(state, action.payload);
                }
            )
            .addCase(fetchCommentByArticleId.rejected, (state, action) => {
                console.log(action.payload);

                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: ArticleDetailsCommentReducer } = ArticleDetailsCommentsSlice;
