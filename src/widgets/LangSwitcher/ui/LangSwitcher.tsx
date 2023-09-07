import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { classNames } from "shared/lib/classNames/classNames";

import styles from "./LangSwitcher.module.scss";

interface ILangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = ({ className, short }: ILangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toogleLanguage = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
        <Button
            className={classNames(styles.langSwitcher, {}, [className])}
            onClick={toogleLanguage}
            theme={ButtonTheme.BACKGROUND_INVERTED}
        >
            {t(short ? "Короткий язык" : "Язык")}
        </Button>
    );
};
