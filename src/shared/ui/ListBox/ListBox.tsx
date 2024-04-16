import { Fragment, ReactNode } from "react";
import { Listbox as HListbox } from "@headlessui/react";

import { classNames } from "shared/lib/classNames/classNames";
import { TDropdownDirection } from "shared/types/ui";
import { Button } from "../Button/Button";

import styles from "./ListBox.module.scss";
import { HStack } from "../Stack";

const people = [
    { id: 1, name: "Durward Reynolds", unavailable: false },
    { id: 2, name: "Kenton Towne", unavailable: false },
    { id: 3, name: "Therese Wunsch", unavailable: false },
    { id: 4, name: "Benedict Kessler", unavailable: true },
    { id: 5, name: "Katelyn Rohan", unavailable: false },
];

export interface IListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface IListBoxProps {
    items?: IListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    readOnly?: boolean;
    direction?: TDropdownDirection;
}

const mapDirectionClass: Record<TDropdownDirection, string> = {
    "top left": styles.optionsTopLeft,
    "top right": styles.optionsTopRight,
    "bottom left": styles.optionsBottomLeft,
    "bottom right": styles.optionsBottomRight,
};

export const ListBox = ({
    items,
    className,
    value,
    defaultValue,
    onChange,
    readOnly,
    direction = "bottom right",
}: IListBoxProps) => {
    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack>
            <HListbox
                as="div"
                className={classNames(styles.listBox, {}, [className])}
                value={value}
                onChange={onChange}
                disabled={readOnly}
            >
                <HListbox.Button as="span">
                    <Button disabled={readOnly}>{value ?? defaultValue}</Button>
                </HListbox.Button>
                <HListbox.Options className={classNames(styles.options, {}, optionsClasses)}>
                    {items?.map(item => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            as={Fragment}
                            disabled={item.disabled}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(styles.option, {
                                        [styles.active]: active,
                                        [styles.selected]: selected,
                                        [styles.disabled]: item.disabled,
                                    })}
                                >
                                    {item.content}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    );
};
