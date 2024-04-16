import { memo, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RouterPath } from "shared/config/routerConfig/routerConfig";
import { LoginModal } from "features/AuthByUsername";
import { userActions, getUserAuthData } from "../../../entities/User";

import styles from "./Navbar.module.scss";
import { Dropdown } from "shared/ui/Dropdown/Dropdown";
import { Avatar } from "shared/ui/Avatar/Avatar";

export const Navbar = memo(() => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    console.log(authData);

    const onToggleModal = useCallback(() => {
        setIsAuthModal(prev => !prev);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

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
                <Dropdown
                    className={styles.dropdown}
                    trigger={<Avatar size={30} src={authData.avatar} />}
                    items={[
                        {
                            content: t("Профиль"),
                            href: RouterPath.profile + authData.id,
                        },
                        {
                            content: t("Выйти"),
                            onClick: onLogout,
                        },
                    ]}
                    direction="bottom left"
                />
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
