import { memo } from "react";
import { useTranslation } from "react-i18next";

import { AppLink } from "@/shared/ui/redesigned/AppLink";
import { Icon } from "@/shared/ui/redesigned/Icon";
import { classNames } from "@/shared/lib/classNames/classNames";
import { SidebarItemType } from "../../../model/types/sidebar";

import styles from "./SidebarItemRedesigned.module.scss";

interface ISidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItemRedesigned = memo(({ item, collapsed }: ISidebarItemProps) => {
    const { t } = useTranslation();

    return (
        <AppLink
            className={classNames(styles.item, { [styles.collapsed]: collapsed }, [])}
            variant="primary"
            to={item.path}
            activeClassName={styles.itemActive}
        >
            <Icon Svg={item.Icon} />
            <span className={styles.link}>{!collapsed && t(item.text)}</span>
        </AppLink>
    );
});
