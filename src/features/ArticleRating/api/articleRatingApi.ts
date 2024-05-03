import { IRating } from "@/entities/Rating";
import { rtkApi } from "@/shared/api/rtkApi";

interface IGetArticleRatingArg {
    userId: string;
    articleId: string;
}

interface IRateArticleArg extends IGetArticleRatingArg {
    rate: number;
    feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: build => ({
        getArticleRating: build.query<IRating[], IGetArticleRatingArg>({
            query: ({ userId, articleId }) => ({
                url: "/article-ratings",
                params: {
                    userId,
                    articleId,
                },
            }),
        }),
        rateArticle: build.mutation<void, IRateArticleArg>({
            query: arg => ({
                url: "/article-ratings",
                method: "POST",
                body: arg,
            }),
        }),
    }),
});

export const { useGetArticleRatingQuery, useRateArticleMutation } = articleRatingApi;
