import { IRating } from "@/entities/Rating";
import { rtkApi } from "@/shared/api/rtkApi";

interface IGetProfileRatingArg {
    userId: string;
    profileId: string;
}

interface IRateProfileArg extends IGetProfileRatingArg {
    rate: number;
    feedback?: string;
}

const profileRatingApi = rtkApi.injectEndpoints({
    endpoints: build => ({
        getProfileRating: build.query<IRating[], IGetProfileRatingArg>({
            query: ({ userId, profileId }) => ({
                url: "/profile-ratings",
                params: {
                    userId,
                    profileId,
                },
            }),
        }),
        rateProfile: build.mutation<void, IRateProfileArg>({
            query: arg => ({
                url: "/profile-ratings",
                method: "POST",
                body: arg,
            }),
        }),
    }),
});

export const { useGetProfileRatingQuery, useRateProfileMutation } = profileRatingApi;
