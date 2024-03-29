import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { StateSchema } from "app/providers/StoreProvider";
import { ArticleDetailsRecommendationsSchema } from "../types/ArticleDetailsRecommendationsSchema";
import { Article } from "entities/Article";
import { fetchArticleRecommendations } from "../services/fetchArticleRecommendations/fetchArticleRecommendations";

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (comment: Article) => comment.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    state => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
);

const ArticleDetailsPageRecommendationsSlice = createSlice({
    name: "ArticleDetailsPageRecommendationsSlice",
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchArticleRecommendations.pending, state => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchArticleRecommendations.fulfilled,
                (state, action: PayloadAction<Article[]>) => {
                    state.isLoading = false;
                    recommendationsAdapter.setAll(state, action.payload);
                }
            )
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                console.log(action.payload);

                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: ArticleDetailsPageRecommendationsReducer } =
    ArticleDetailsPageRecommendationsSlice;
