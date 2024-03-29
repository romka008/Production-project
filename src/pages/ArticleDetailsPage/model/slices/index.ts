import { combineReducers } from "@reduxjs/toolkit";
import { ArticleDetailsPageSchema } from "../types";
import { ArticleDetailsCommentReducer } from "./ArticleDetailsCommentsSlice";
import { ArticleDetailsPageRecommendationsReducer } from "./ArticleDetailsPageRecommendationsSlice";

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    comments: ArticleDetailsCommentReducer,
    recommendations: ArticleDetailsPageRecommendationsReducer,
});
