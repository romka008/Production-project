import React, { InputHTMLAttributes, memo, useRef } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import styles from "./Input.module.scss";

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "readOnly"
>;

interface IInputProps extends HTMLInputProps {
    value?: string | number;
    onChange?: (value: string) => void;
    placeholder?: string;
    className?: string;
    readOnly?: boolean;
}

export const Input = memo(
    ({
        className,
        value,
        onChange,
        placeholder,
        type = "text",
        readOnly,
        ...rest
    }: IInputProps) => {
        const ref = useRef<HTMLInputElement>(null);
        const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(e.target.value);
        };

        return (
            <div className={classNames(styles.inputWrapper, {}, [className])}>
                <input
                    ref={ref}
                    className={classNames(styles.input, { [styles.readOnly]: readOnly }, [])}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                    readOnly={readOnly}
                    {...rest}
                />
            </div>
        );
    }
);
