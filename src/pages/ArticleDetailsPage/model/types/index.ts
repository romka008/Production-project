import { ArticleDetalsCommentsSchema } from "./ArticleDetailsCommentsSchema";
import { ArticleDetailsRecommendationsSchema } from "./ArticleDetailsRecommendationsSchema";

export interface ArticleDetailsPageSchema {
    comments: ArticleDetalsCommentsSchema;
    recommendations: ArticleDetailsRecommendationsSchema;
}
