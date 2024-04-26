import { ReactNode } from "react";
import { Popover as HPopover } from "@headlessui/react";

import { classNames } from "shared/lib/classNames/classNames";
import { TDropdownDirection } from "shared/types/ui";
import { mapDirectionClass } from "../../styles/consts";

import styles from "./Popover.module.scss";
import popupStyles from "../../styles/popup.module.scss";

interface IPopoverProps {
    className?: string;
    direction?: TDropdownDirection;
    trigger?: ReactNode;
    children?: ReactNode;
}

export const Popover = ({
    className,
    trigger,
    direction = "bottom right",
    children,
}: IPopoverProps) => {
    const menuClasses = [mapDirectionClass[direction]];
    return (
        <HPopover
            as="div"
            className={classNames(styles.popover, {}, [className, popupStyles.popup])}
        >
            <HPopover.Button as="div" className={popupStyles.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel className={classNames(styles.panel, {}, menuClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
};
