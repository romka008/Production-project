import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername";

import styles from "./Navbar.module.scss";

export const Navbar = () => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation();

    const onToggleModal = useCallback(() => {
        setIsAuthModal(prev => !prev);
    }, []);

    return (
        <div className={classNames(styles.navbar, {}, [])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={styles.links}
                onClick={onToggleModal}
            >
                {t("Войти")}
            </Button>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onToggleModal} />}
        </div>
    );
};
