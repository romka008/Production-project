import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Button as ButtonDeprecated, ButtonTheme } from "@/shared/ui/deprecated/Button";
import { classNames } from "@/shared/lib/classNames/classNames";

import styles from "./LangSwitcher.module.scss";
import { ToggleFeatures } from "@/shared/lib/features";
import { Button } from "@/shared/ui/redesigned/Button";

interface ILangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: ILangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toogleLanguage = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
        <ToggleFeatures
            name="isAppRedesigned"
            on={
                <Button
                    className={classNames(styles.langSwitcher, {}, [className])}
                    onClick={toogleLanguage}
                    variant="clear"
                >
                    {t(short ? "Короткий язык" : "Язык")}
                </Button>
            }
            off={
                <ButtonDeprecated
                    className={classNames(styles.langSwitcher, {}, [className])}
                    onClick={toogleLanguage}
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                >
                    {t(short ? "Короткий язык" : "Язык")}
                </ButtonDeprecated>
            }
        />
    );
});
