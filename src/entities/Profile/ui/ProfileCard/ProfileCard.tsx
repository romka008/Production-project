import { useTranslation } from "react-i18next";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Input } from "shared/ui/Input/Input";
import { Profile } from "../../model/types/profile";
import { Loader } from "widgets/Loader/ui/Loader";
import { classNames } from "shared/lib/classNames/classNames";
import { Country, CountrySelect } from "../../../../entities/Country";
import { Currency, CurrencySelect } from "../../../../entities/Currency";
import { Avatar } from "shared/ui/Avatar/Avatar";

import styles from "./ProfileCard.module.scss";

interface IProfileCardProps {
    className?: string;
    formData?: Profile;
    isLoading?: boolean;
    error?: string;
    readOnly?: boolean;
    onChangeFirstName: (value: string) => void;
    onChangeLastName: (value: string) => void;
    onChangeCity: (value: string) => void;
    onChangeAge: (value: number | string) => void;
    onChangeUsername: (value: string) => void;
    onChangeAvatar: (value: string) => void;
    onChangeCurrency: (currency: Currency) => void;
    onChangeCountry: (country: Country) => void;
}

export const ProfileCard = ({
    className,
    formData,
    isLoading,
    error,
    readOnly,
    onChangeFirstName,
    onChangeLastName,
    onChangeCity,
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
}: IProfileCardProps) => {
    const { t } = useTranslation("profile");

    if (isLoading) {
        return (
            <div className={classNames(styles.profileCard, {}, [styles.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(styles.profileCard, {}, [styles.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t("Произошла ошибка при загрузке профиля")}
                    text={t("Попробуйте обновить страницу")}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(styles.profileCard, { [styles.editing]: !readOnly }, [])}>
            <div className={styles.data}>
                {formData?.avatar && (
                    <div className={styles.avatarWrapper}>
                        <Avatar src={formData.avatar} alt="Avatar" />
                    </div>
                )}
                <div className={styles.field}>
                    <label>{t("Имя")}</label>
                    <Input
                        value={formData?.first}
                        placeholder={t("Ваше имя")}
                        className={styles.input}
                        onChange={onChangeFirstName}
                        readOnly={readOnly}
                    />
                </div>
                <div className={styles.field}>
                    <label>{t("Фамилия")}</label>
                    <Input
                        value={formData?.lastname}
                        placeholder={t("Ваше фамилия")}
                        className={styles.input}
                        onChange={onChangeLastName}
                        readOnly={readOnly}
                    />
                </div>
                <div className={styles.field}>
                    <label>{t("Город")}</label>
                    <Input
                        value={formData?.city}
                        placeholder={t("Ваш город")}
                        className={styles.input}
                        onChange={onChangeCity}
                        readOnly={readOnly}
                    />
                </div>
                <div className={styles.field}>
                    <label>{t("Возраст")}</label>
                    <Input
                        value={formData?.age}
                        placeholder={t("Ваш возраст")}
                        className={styles.input}
                        onChange={onChangeAge}
                        readOnly={readOnly}
                    />
                </div>
                <div className={styles.field}>
                    <label>{t("Логин")}</label>
                    <Input
                        value={formData?.username}
                        placeholder={t("Ваш логин")}
                        className={styles.input}
                        onChange={onChangeUsername}
                        readOnly={readOnly}
                    />
                </div>
                <div className={styles.field}>
                    <label>{t("Аватар")}</label>
                    <Input
                        value={formData?.avatar}
                        placeholder={t("Ссылка на ваш аватар")}
                        className={styles.input}
                        onChange={onChangeAvatar}
                        readOnly={readOnly}
                    />
                </div>
                <div className={styles.field}>
                    <label>{t("Ваша валюту")}</label>
                    <CurrencySelect
                        value={formData?.currency}
                        onChange={onChangeCurrency}
                        readOnly={readOnly}
                    />
                </div>
                <div className={styles.field}>
                    <label>{t("Ваша страна")}</label>
                    <CountrySelect
                        value={formData?.country}
                        onChange={onChangeCountry}
                        readOnly={readOnly}
                    />
                </div>
            </div>
        </div>
    );
};
