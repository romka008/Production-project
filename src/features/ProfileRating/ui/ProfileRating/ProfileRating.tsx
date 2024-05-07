import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { Rating } from "@/entities/Rating";
import { getUserAuthData } from "@/entities/User";
import { Skeleton } from "@/shared/ui/Skeleton";
import { useGetProfileRatingQuery, useRateProfileMutation } from "../../api/profileRatingApi";

export interface IProfileRatingProps {
    className?: string;
    profileId: string;
}

const ProfileRating = memo((props: IProfileRatingProps) => {
    const { className, profileId } = props;
    const { t } = useTranslation("profile");
    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetProfileRatingQuery({ userId: userData?.id ?? "", profileId });
    const [rateProfileMutation] = useRateProfileMutation();

    const handleRateProfile = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateProfileMutation({
                    userId: userData?.id ?? "",
                    profileId,
                    rate: starsCount,
                    feedback,
                });
            } catch (e) {
                // handle error
                console.log(e);
            }
        },
        [profileId, rateProfileMutation, userData?.id]
    );

    const handleAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRateProfile(starsCount, feedback);
        },
        [handleRateProfile]
    );

    const handleCancel = useCallback(
        (starsCount: number) => {
            handleRateProfile(starsCount);
        },
        [handleRateProfile]
    );

    if (profileId === userData?.id && __PROJECT__ !== "storybook") {
        return null;
    }

    if (isLoading) {
        return <Skeleton width={"100%"} height={120} />;
    }

    const rating = data?.[0];

    return (
        <Rating
            onAccept={handleAccept}
            onCancel={handleCancel}
            rate={rating?.rate}
            className={className}
            title={t("Оцените профиль")}
            feedbackTitle={t("Оставьте свой отзыв о профиле, это поможет улучшить качество")}
            hasFeedback
        ></Rating>
    );
});

export default ProfileRating;
