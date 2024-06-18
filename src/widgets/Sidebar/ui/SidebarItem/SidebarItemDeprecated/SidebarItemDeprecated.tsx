import { memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink as AppLinkDeprecated, AppLinkTheme } from "@/shared/ui/deprecated/AppLink";
import { SidebarItemType } from "../../../model/types/sidebar";

import styles from "../SidebarItem.module.scss";

interface ISidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItemDeprecated = memo(({ item, collapsed }: ISidebarItemProps) => {
    const { t } = useTranslation();

    return (
        <AppLinkDeprecated
            className={classNames(styles.item, { [styles.collapsed]: collapsed }, [])}
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
        >
            <item.Icon className={styles.icon} />
            <span className={styles.link}>{!collapsed && t(item.text)}</span>
        </AppLinkDeprecated>
    );
});
