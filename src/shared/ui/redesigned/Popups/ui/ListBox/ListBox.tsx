import { Fragment, ReactNode, useMemo } from "react";
import { Listbox as HListbox } from "@headlessui/react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { TDropdownDirection } from "@/shared/types/ui";
import { Button } from "../../../Button/Button";
import { HStack } from "../../../../redesigned/Stack";
import { mapDirectionClass } from "../../styles/consts";

import styles from "./ListBox.module.scss";
import popupStyles from "../../styles/popup.module.scss";

const people = [
    { id: 1, name: "Durward Reynolds", unavailable: false },
    { id: 2, name: "Kenton Towne", unavailable: false },
    { id: 3, name: "Therese Wunsch", unavailable: false },
    { id: 4, name: "Benedict Kessler", unavailable: true },
    { id: 5, name: "Katelyn Rohan", unavailable: false },
];

export interface IListBoxItem<T extends string> {
    value: T;
    content: ReactNode;
    disabled?: boolean;
}

interface IListBoxProps<T extends string> {
    items?: IListBoxItem<T>[];
    className?: string;
    value?: T;
    defaultValue?: string;
    onChange?: (value: T) => void;
    readOnly?: boolean;
    direction?: TDropdownDirection;
}

export const ListBox = <T extends string>({
    items,
    className,
    value,
    defaultValue,
    onChange,
    readOnly,
    direction = "bottom right",
}: IListBoxProps<T>) => {
    const optionsClasses = [mapDirectionClass[direction], popupStyles.menu];

    const selectedItem = useMemo(() => {
        return items?.find(item => item.value === value);
    }, [items, value]);

    return (
        <HStack>
            <HListbox
                as="div"
                className={classNames(styles.listBox, {}, [className, popupStyles.popup])}
                value={value}
                onChange={onChange}
                disabled={readOnly}
            >
                <HListbox.Button as="span">
                    <Button variant="filled" disabled={readOnly}>
                        {selectedItem?.content ?? defaultValue}
                    </Button>
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
                                        [popupStyles.active]: active,
                                        [popupStyles.selected]: selected,
                                        [popupStyles.disabled]: item.disabled,
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
