import { memo, useMemo, useState } from "react";
import { useSelector } from "react-redux";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/Button";
import { VStack } from "@/shared/ui/Stack";
import { ToggleFeatures } from "@/shared/lib/features";
import { AppLogo } from "@/shared/ui/AppLogo";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { LangSwitcher } from "@/features/LangSwitcher";

import { getSidebarItems } from "../../model/selectors/getSidebarItems";
import { SidebarItem } from "../SidebarItem/SidebarItem";

import styles from "./Sidebar.module.scss";

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
        <ToggleFeatures
            name="isAppRedesigned"
            on={
                <aside
                    className={classNames(
                        styles.sidebarRedesigned,
                        { [styles.collapsed]: collapsed },
                        [className]
                    )}
                    data-testid="sidebar"
                >
                    <AppLogo className={styles.appLogo} />
                </aside>
            }
            off={
                <aside
                    className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [
                        className,
                    ])}
                    data-testid="sidebar"
                >
                    <Button
                        className={styles.collapseBtn}
                        data-testid="sidebar-toggle"
                        onClick={onToggle}
                        theme={ButtonTheme.BACKGROUND_INVERTED}
                        size={ButtonSize.L}
                        square
                    >
                        {collapsed ? ">" : "<"}
                    </Button>
                    <VStack role="nav" className={styles.items} gap="8">
                        {itemsList}
                    </VStack>
                    <div className={styles.swithers}>
                        <ThemeSwitcher />
                        <LangSwitcher short={collapsed} />
                    </div>
                </aside>
            }
        />
    );
});
