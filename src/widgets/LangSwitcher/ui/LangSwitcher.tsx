import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { classNames } from "shared/lib/classNames/classNames";

interface ILangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: ILangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toogleLanguage = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
        <Button
            className={classNames("", {}, [className])}
            onClick={toogleLanguage}
            theme={ThemeButton.CLEAR}
        >
            {t("Язык")}
        </Button>
    );
};
