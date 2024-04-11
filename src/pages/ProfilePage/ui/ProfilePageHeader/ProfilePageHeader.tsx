import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/Text";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { HStack } from "shared/ui/Stack/HStack/HStack";
import {
    getProfileData,
    getProfileReadOnly,
    profileActions,
    updateProfileData,
} from "../../../../entities/Profile";
import { getUserAuthData } from "../../../../entities/User";

interface IProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: IProfilePageHeaderProps) => {
    const { t } = useTranslation("profile");
    const readOnly = useSelector(getProfileReadOnly);
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const isCanEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadOnly(false));
    }, [dispatch]);

    const onCancel = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack max justify="between">
            <Text title={t("Профиль")} />
            {isCanEdit && (
                <>
                    {readOnly ? (
                        <Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>
                            {t("Редактировать")}
                        </Button>
                    ) : (
                        <HStack gap="16">
                            <Button theme={ButtonTheme.OUTLINE_RED} onClick={onCancel}>
                                {t("Отменить")}
                            </Button>
                            <Button theme={ButtonTheme.OUTLINE} onClick={onSave}>
                                {t("Сохранить")}
                            </Button>
                        </HStack>
                    )}
                </>
            )}
        </HStack>
    );
};
