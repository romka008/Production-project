import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

import styles from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className={classNames(styles.navbar, {}, [])}></div>
        </div>
    );
};
