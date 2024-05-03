import React, { Suspense } from "react";

import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { IProfileRatingProps } from "./ProfileRating";

const ProfileRating = React.lazy(() => import("./ProfileRating"));

export const ProfileRatingLazy = (props: IProfileRatingProps) => {
    return (
        <Suspense fallback={<Skeleton width={"100%"} height={120} />}>
            <ProfileRating {...props} />
        </Suspense>
    );
};
