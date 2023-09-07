import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { RouterPath } from "shared/config/routerConfig/routerConfig";
import MainIcon from "widgets/assets/icons/main-20-20.svg";
import AboutIcon from "widgets/assets/icons/about-20-20.svg";

import styles from "./Sidebar.module.scss";

interface ISidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: ISidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

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
                <AppLink
                    className={styles.item}
                    theme={AppLinkTheme.SECONDARY}
                    to={RouterPath.main}
                >
                    <MainIcon className={styles.icon} />
                    <span className={styles.link}>{!collapsed && t("Главная")}</span>
                </AppLink>
                <AppLink
                    className={styles.item}
                    theme={AppLinkTheme.SECONDARY}
                    to={RouterPath.about}
                >
                    <AboutIcon className={styles.icon} />
                    <span className={styles.link}> {t("О сайте")}</span>
                </AppLink>
            </div>
            <div className={styles.swithers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
};
