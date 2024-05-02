import { Fragment, ReactNode } from "react";
import { Menu } from "@headlessui/react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { TDropdownDirection } from "@/shared/types/ui";
import { AppLink } from "../../../AppLink/AppLink";
import { mapDirectionClass } from "../../styles/consts";

import styles from "./Dropdown.module.scss";
import popupStyles from "../../styles/popup.module.scss";

export interface IDropDownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
    key?: string;
}

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
        <Menu as="div" className={classNames(styles.dropdown, {}, [className, popupStyles.popup])}>
            <Menu.Button className={popupStyles.trigger}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(styles.menu, {}, menuClasses)}>
                {items?.map(item => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            onClick={item.onClick}
                            className={classNames(
                                styles.item,
                                { [popupStyles.active]: active },
                                []
                            )}
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
                                key={item.key}
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
