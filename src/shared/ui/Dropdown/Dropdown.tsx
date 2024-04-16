import { Menu } from "@headlessui/react";

import styles from "./Dropdown.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Fragment, ReactNode } from "react";
import { TDropdownDirection } from "shared/types/ui";
import { AppLink } from "../AppLink/AppLink";

export interface IDropDownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

const mapDirectionClass: Record<TDropdownDirection, string> = {
    "top left": styles.optionsTopLeft,
    "top right": styles.optionsTopRight,
    "bottom left": styles.optionsBottomLeft,
    "bottom right": styles.optionsBottomRight,
};

interface IDropdownProps {
    className?: string;
    items: IDropDownItem[];
    trigger: ReactNode;
    direction?: TDropdownDirection;
}

export const Dropdown = ({
    className,
    items,
    trigger,
    direction = "bottom right",
}: IDropdownProps) => {
    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu as="div" className={classNames(styles.dropdown, {}, [className])}>
            <Menu.Button className={styles.btn}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(styles.menu, {}, menuClasses)}>
                {items?.map(item => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            onClick={item.onClick}
                            className={classNames(styles.item, { [styles.active]: active }, [])}
                            disabled={item.disabled}
                        >
                            {item.content}
                        </button>
                    );
                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                key={"123"}
                                disabled={item.disabled}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }
                    return (
                        <Menu.Item as={Fragment} key={"123"} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};
