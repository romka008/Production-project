import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

import styles from "./Navbar.module.scss";

export const Navbar = () => {
    return (
        <div>
            <div className={classNames(styles.navbar, {}, [])}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>
                    Главная
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};
