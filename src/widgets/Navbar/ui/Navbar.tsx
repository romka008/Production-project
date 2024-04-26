import { memo, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RouterPath } from "shared/config/routerConfig/routerConfig";
import { HStack } from "shared/ui/Stack";
import { LoginModal } from "features/AuthByUsername";
import { NotificationButton } from "features/notificationButton";
import { AvatarDropdown } from "features/avatarDropdown";
import { getUserAuthData } from "../../../entities/User";

import styles from "./Navbar.module.scss";
import { Drawer } from "shared/ui/Drawer/Drawer";
import { NotificationList } from "entities/Notification";

export const Navbar = memo(() => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);

    const onToggleModal = useCallback(() => {
        setIsAuthModal(prev => !prev);
    }, []);

    if (authData) {
        return (
            <header className={classNames(styles.navbar, {}, [])}>
                <Text theme={TextTheme.INVERTED} className={styles.appName} title={t("App")} />
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    className={styles.createLink}
                    to={RouterPath.article_create}
                >
                    {t("Создать статью")}
                </AppLink>
                <HStack gap="16" className={styles.actions}>
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(styles.navbar, {}, [])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={styles.links}
                onClick={onToggleModal}
            >
                {t("Войти")}
            </Button>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onToggleModal} />}
        </header>
    );
});
