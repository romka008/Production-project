import React, { InputHTMLAttributes, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Input.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;

interface IInputProps extends HTMLInputProps {
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    className?: string;
}

export const Input = memo(
    ({ className, value, onChange, placeholder, type = "text", ...rest }: IInputProps) => {
        const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(e.target.value);
        };

        return (
            <div className={classNames(styles.inputWrapper, {}, [className])}>
                <input
                    className={styles.input}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                    {...rest}
                />
            </div>
        );
    }
);
