import { memo, useState } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";

import { SidebarItemsList } from "../../model/items";
import { SidebarItem } from "../SidebarItem/SidebarItem";

import styles from "./Sidebar.module.scss";

interface ISidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: ISidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div
            className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}
            data-testid="sidebar"
        >
            <Button
                className={styles.collpseBtn}
                data-testid="sidebar-toggle"
                onClick={onToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? ">" : "<"}
            </Button>
            <div className={styles.items}>
                {SidebarItemsList.map(item => {
                    return <SidebarItem key={item.path} item={item} collapsed={collapsed} />;
                })}
            </div>
            <div className={styles.swithers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
});
