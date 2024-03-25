import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/Text";
import styles from "./ProfilePageHeader.module.scss";
import { useSelector } from "react-redux";
import {
    getProfileData,
    getProfileReadOnly,
    profileActions,
    updateProfileData,
} from "../../../../entities/Profile";
import { getUserAuthData } from "../../../../entities/User";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useCallback } from "react";

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
        <div className={styles.header}>
            <Text title={t("Профиль")} />
            {isCanEdit && (
                <div className={styles.btnWrapper}>
                    {readOnly ? (
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            className={styles.editBtn}
                            onClick={onEdit}
                        >
                            {t("Редактировать")}
                        </Button>
                    ) : (
                        <div>
                            <Button
                                theme={ButtonTheme.OUTLINE_RED}
                                className={styles.editBtn}
                                onClick={onCancel}
                            >
                                {t("Отменить")}
                            </Button>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                className={styles.saveBtn}
                                onClick={onSave}
                            >
                                {t("Сохранить")}
                            </Button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
