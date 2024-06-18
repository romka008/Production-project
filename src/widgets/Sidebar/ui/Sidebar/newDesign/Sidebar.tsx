import { memo, useMemo, useState } from "react";
import { useSelector } from "react-redux";

import { classNames } from "@/shared/lib/classNames/classNames";
import { VStack } from "@/shared/ui/deprecated/Stack";
import { AppLogo } from "@/shared/ui/redesigned/AppLogo";
import { Icon } from "@/shared/ui/redesigned/Icon";
import ArrowIcon from "@/shared/assets/icons/Arrow-bottom.svg";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { LangSwitcher } from "@/features/LangSwitcher";

import { getSidebarItems } from "../../../model/selectors/getSidebarItems";
import { SidebarItem } from "../../SidebarItem/SidebarItem";

import styles from "./Sidebar.module.scss";
import { Button } from "@/shared/ui/redesigned/Button";

interface ISidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: ISidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    const itemsList = useMemo(
        () =>
            sidebarItemsList.map(item => {
                return <SidebarItem key={item.path} item={item} collapsed={collapsed} />;
            }),
        [collapsed, sidebarItemsList]
    );

    return (
        <aside
            className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}
            data-testid="sidebar"
        >
            <AppLogo size={collapsed ? 30 : 50} className={styles.appLogo} />
            <VStack role="nav" className={styles.items} gap="8">
                {itemsList}
            </VStack>
            <Button
                className={styles.collapseBtn}
                data-testid="sidebar-toggle"
                onClick={onToggle}
                variant="clear"
                size="l"
                square
            >
                <Icon Svg={ArrowIcon} />
            </Button>
            <div className={styles.swithers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </aside>
    );
});
