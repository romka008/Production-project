import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";

import styles from "./Sidebar.module.scss";

interface ISidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: ISidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToogle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}>
            <button onClick={onToogle}>toogle</button>
            <div className={styles.swithers}>
                <ThemeSwitcher />
                {!collapsed && <LangSwitcher />}
            </div>
        </div>
    );
};
