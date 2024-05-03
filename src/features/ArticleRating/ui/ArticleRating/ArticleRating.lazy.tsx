import React, { Suspense } from "react";

import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { IArticleRatingProps } from "./ArticleRating";

const ArticleRating = React.lazy(() => import("./ArticleRating"));

export const ArticleRatingLazy = (props: IArticleRatingProps) => {
    return (
        <Suspense fallback={<Skeleton width={"100%"} height={120} />}>
            <ArticleRating {...props} />
        </Suspense>
    );
};
