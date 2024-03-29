import { memo, useMemo, useState } from "react";
import { useSelector } from "react-redux";

import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";

import { getSidebarItems } from "widgets/Sidebar/model/selectors/getSidebarItems";
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
        <menu
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
            <div className={styles.items}>{itemsList}</div>
            <div className={styles.swithers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </menu>
    );
});
