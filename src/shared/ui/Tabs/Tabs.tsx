import { ReactNode, memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Tabs.module.scss";
import { Card, CardTheme } from "../Card/Card";

export interface ITabItem {
    value: string;
    content: ReactNode;
}

interface ITabsProps {
    className?: string;
    tabs: ITabItem[];
    value: string;
    onTabClick: (tab: ITabItem) => void;
}

export const Tabs = memo(({ className, tabs, value, onTabClick }: ITabsProps) => {
    const clickHandle = useCallback(
        (tab: ITabItem) => {
            return () => {
                onTabClick(tab);
            };
        },
        [onTabClick]
    );

    return (
        <div className={classNames(styles.tabs, {}, [className])}>
            {tabs.map(tab => (
                <Card
                    theme={value === tab.value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                    className={styles.tab}
                    key={tab.value}
                    onClick={clickHandle(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});
