import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

import styles from "./LoginForm.module.scss";

interface ILoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: ILoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.loginForm, {}, [className])}>
            <Input placeholder="имя пользователя" />
            <Input placeholder="пароль" />
            <Button theme={ButtonTheme.OUTLINE} className={styles.loginBtn}>
                {t("Войти")}
            </Button>
        </div>
    );
};
