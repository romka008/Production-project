import { memo } from "react";
import { useTranslation } from "react-i18next";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import { SidebarItemType } from "../../model/types/sidebar";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";

import styles from "./SidebarItem.module.scss";

interface ISidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: ISidebarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink className={styles.item} theme={AppLinkTheme.SECONDARY} to={item.path}>
            <item.Icon className={styles.icon} />
            <span className={styles.link}>{!collapsed && t(item.text)}</span>
        </AppLink>
    );
});
