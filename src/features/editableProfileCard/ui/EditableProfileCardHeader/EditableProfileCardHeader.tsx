import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { HStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { profileActions } from "../../model/slice/profileSlice";
import { getProfileReadOnly } from "../../model/selectors/getProfileReadOnly/getProfileReadOnly";
import { getProfileFormData } from "../../model/selectors/getProfileFormData/getProfileFormData";
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData";
import { getUserAuthData } from "@/entities/User";

interface IEditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = ({ className }: IEditableProfileCardHeaderProps) => {
    const { t } = useTranslation("profile");
    const readOnly = useSelector(getProfileReadOnly);
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileFormData);
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
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={onEdit}
                            data-testid="EditableProfileCardHeader.EditButton"
                        >
                            {t("Редактировать")}
                        </Button>
                    ) : (
                        <HStack gap="16">
                            <Button
                                theme={ButtonTheme.OUTLINE_RED}
                                onClick={onCancel}
                                data-testid="EditableProfileCardHeader.CancelButton"
                            >
                                {t("Отменить")}
                            </Button>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onSave}
                                data-testid="EditableProfileCardHeader.SaveButton"
                            >
                                {t("Сохранить")}
                            </Button>
                        </HStack>
                    )}
                </>
            )}
        </HStack>
    );
};
