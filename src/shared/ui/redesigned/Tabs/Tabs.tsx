import { ReactNode, memo, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./Tabs.module.scss";
import { Card } from "../Card/Card";
import { Flex, FlexDirection } from "../Stack/Flex/Flex";

export interface ITabItem {
    value: string;
    content: ReactNode;
}

interface ITabsProps {
    className?: string;
    tabs: ITabItem[];
    value: string;
    onTabClick: (tab: ITabItem) => void;
    direction?: FlexDirection;
}

export const Tabs = memo(
    ({ className, tabs, value, onTabClick, direction = "row" }: ITabsProps) => {
        const clickHandle = useCallback(
            (tab: ITabItem) => {
                return () => {
                    onTabClick(tab);
                };
            },
            [onTabClick]
        );

        return (
            <Flex direction={direction} gap="8" align="start" className={className}>
                {tabs.map(tab => (
                    <Card
                        variant={value === tab.value ? "light" : "normal"}
                        className={classNames(
                            styles.tab,
                            { [styles.selected]: value === tab.value },
                            []
                        )}
                        key={tab.value}
                        onClick={clickHandle(tab)}
                        border="round"
                    >
                        {tab.content}
                    </Card>
                ))}
            </Flex>
        );
    }
);
