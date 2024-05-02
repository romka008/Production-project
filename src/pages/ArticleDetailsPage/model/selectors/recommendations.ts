import { StateSchema } from "@/app/providers/StoreProvider";

export const getArticleRecommendationsIsLoading = (state: StateSchema) =>
    state.articleDetailsPage?.comments.isLoading;
export const getArticleRecommendationsIsError = (state: StateSchema) =>
    state.articleDetailsPage?.recommendations.error;
