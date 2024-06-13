import { memo, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { Text, TextTheme } from "@/shared/ui/Text";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink";
import { getRouteArticleCreate } from "@/shared/const/router";
import { HStack } from "@/shared/ui/Stack";
import { LoginModal } from "@/features/AuthByUsername";
import { NotificationButton } from "@/features/notificationButton";
import { AvatarDropdown } from "@/features/avatarDropdown";
import { getUserAuthData } from "@/entities/User";

import styles from "./Navbar.module.scss";
import { ToggleFeatures } from "@/shared/lib/features";

export const Navbar = memo(() => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);

    const onToggleModal = useCallback(() => {
        setIsAuthModal(prev => !prev);
    }, []);

    if (authData) {
        return (
            <ToggleFeatures
                name="isAppRedesigned"
                off={
                    <header className={classNames(styles.navbar, {}, [])}>
                        <Text
                            theme={TextTheme.INVERTED}
                            className={styles.appName}
                            title={t("App")}
                        />
                        <AppLink
                            theme={AppLinkTheme.SECONDARY}
                            className={styles.createLink}
                            to={getRouteArticleCreate()}
                        >
                            {t("Создать статью")}
                        </AppLink>
                        <HStack gap="16" className={styles.actions}>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                }
                on={
                    <header className={classNames(styles.navbarRedesigned, {}, [])}>
                        <HStack gap="16" className={styles.actions}>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                }
            />
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
