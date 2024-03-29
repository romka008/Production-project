import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Select.module.scss";
import { ChangeEvent, useMemo } from "react";

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface ISelectProps<T extends string> {
    className?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readOnly?: boolean;
}

export const Select = <T extends string>({
    className,
    options,
    value,
    onChange,
    readOnly,
}: ISelectProps<T>) => {
    const optionList = useMemo(
        () =>
            options?.map(opt => (
                <option className={styles.option} value={opt.value} key={opt.value}>
                    {opt.content}
                </option>
            )),
        [options]
    );

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value as T);
        }
    };
    return (
        <div className={classNames(styles.wrapper, {}, [className])}>
            <select
                className={classNames(styles.select, { [styles.readOnly]: readOnly }, [])}
                disabled={readOnly}
                onChange={onChangeHandler}
                value={value}
            >
                {optionList}
            </select>
        </div>
    );
};
