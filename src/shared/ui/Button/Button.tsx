import { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Button.module.scss";

export enum ThemeButton {
    CLEAR = "clear",
    OUTLINE = "outline",
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    theme?: ThemeButton;
}

export const Button = ({ className, children, theme, ...rest }: IButtonProps) => {
    return (
        <button
            className={classNames(styles.button, {}, [styles[theme], className])}
            type="button"
            {...rest}
        >
            {children}
        </button>
    );
};
