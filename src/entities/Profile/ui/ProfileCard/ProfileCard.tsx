import { useTranslation } from "react-i18next";

import { Text, TextAlign, TextTheme } from "@/shared/ui/deprecated/Text";
import { Input } from "@/shared/ui/deprecated/Input";
import { HStack, VStack } from "@/shared/ui/deprecated/Stack";
import { Loader } from "@/shared/ui/deprecated/Loader";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Avatar } from "@/shared/ui/deprecated/Avatar";
import { Country, CountrySelect } from "@/entities/Country";
import { Currency, CurrencySelect } from "@/entities/Currency";
import { Profile } from "../../model/types/profile";

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
            <HStack
                justify="center"
                max
                className={classNames(styles.profileCard, {}, [styles.loading])}
            >
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack
                justify="center"
                max
                className={classNames(styles.profileCard, {}, [styles.error])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    title={t("Произошла ошибка при загрузке профиля")}
                    text={t("Попробуйте обновить страницу")}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    return (
        <VStack
            gap="16"
            max
            className={classNames(styles.profileCard, { [styles.editing]: !readOnly }, [])}
        >
            {formData?.avatar && (
                <HStack justify="center" max className={styles.avatarWrapper}>
                    <Avatar src={formData.avatar} alt="Avatar" />
                </HStack>
            )}
            <HStack gap="8" max>
                <label className={styles.label}>{t("Имя")}</label>
                <Input
                    value={formData?.first}
                    placeholder={t("Ваше имя")}
                    className={styles.input}
                    onChange={onChangeFirstName}
                    readOnly={readOnly}
                    data-testid="ProfileCard.first"
                />
            </HStack>
            <HStack gap="8" max>
                <label className={styles.label}>{t("Фамилия")}</label>
                <Input
                    value={formData?.lastname}
                    placeholder={t("Ваше фамилия")}
                    className={styles.input}
                    onChange={onChangeLastName}
                    readOnly={readOnly}
                    data-testid="ProfileCard.lastname"
                />
            </HStack>
            <HStack gap="8" max>
                <label className={styles.label}>{t("Город")}</label>
                <Input
                    value={formData?.city}
                    placeholder={t("Ваш город")}
                    className={styles.input}
                    onChange={onChangeCity}
                    readOnly={readOnly}
                />
            </HStack>
            <HStack gap="8" max>
                <label className={styles.label}>{t("Возраст")}</label>
                <Input
                    value={formData?.age}
                    placeholder={t("Ваш возраст")}
                    className={styles.input}
                    onChange={onChangeAge}
                    readOnly={readOnly}
                />
            </HStack>
            <HStack gap="8" max>
                <label className={styles.label}>{t("Логин")}</label>
                <Input
                    value={formData?.username}
                    placeholder={t("Ваш логин")}
                    className={styles.input}
                    onChange={onChangeUsername}
                    readOnly={readOnly}
                />
            </HStack>
            <HStack gap="8" max>
                <label className={styles.label}>{t("Аватар")}</label>
                <Input
                    value={formData?.avatar}
                    placeholder={t("Ссылка на ваш аватар")}
                    className={styles.input}
                    onChange={onChangeAvatar}
                    readOnly={readOnly}
                />
            </HStack>
            <HStack gap="8" max>
                <label className={styles.label}>{t("Ваша валюта")}</label>
                <CurrencySelect
                    value={formData?.currency}
                    onChange={onChangeCurrency}
                    readOnly={readOnly}
                />
            </HStack>
            <HStack gap="8" max>
                <label className={styles.label}>{t("Ваша страна")}</label>
                <CountrySelect
                    value={formData?.country}
                    onChange={onChangeCountry}
                    readOnly={readOnly}
                />
            </HStack>
        </VStack>
    );
};
