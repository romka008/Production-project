import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Select.module.scss";
import { ChangeEvent, memo, useMemo } from "react";

export interface SelectOption {
    value: string;
    content: string;
}

interface ISelectProps {
    className?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readOnly?: boolean;
}

export const Select = memo(({ className, options, value, onChange, readOnly }: ISelectProps) => {
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
            onChange(e.target.value);
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
});
