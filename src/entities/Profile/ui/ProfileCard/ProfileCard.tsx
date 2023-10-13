import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

import styles from "./ProfileCard.module.scss";

interface IProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: IProfileCardProps) => {
    const { t } = useTranslation("profile");
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={styles.profileCard}>
            <div className={styles.header}>
                <Text title={t("Профиль")} />
                <Button theme={ButtonTheme.OUTLINE} className={styles.editBtn}>
                    {t("Редактировать")}
                </Button>
            </div>
            <div className={styles.data}>
                <Input value={data?.first} placeholder={t("Ваше имя")} className={styles.input} />
                <Input
                    value={data?.lastname}
                    placeholder={t("Ваше фамилия")}
                    className={styles.input}
                />
            </div>
        </div>
    );
};
