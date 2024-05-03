import { ButtonHTMLAttributes, ReactNode, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import styles from "./Button.module.scss";

export enum ButtonTheme {
    CLEAR = "clear",
    CLEAR_INVERTED = "clearInverted",
    OUTLINE = "outline",
    OUTLINE_RED = "outlineRed",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
    M = "size_m",
    L = "size_l",
    XL = "size_xl",
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    fullWidth?: boolean;
}

export const Button = memo(
    ({
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        square,
        disabled,
        size = ButtonSize.M,
        fullWidth,
        ...rest
    }: IButtonProps) => {
        const mods = {
            [styles.square]: square,
            [styles[size]]: true,
            [styles.disabled]: disabled,
            [styles.fullWidth]: fullWidth,
        };

        return (
            <button
                className={classNames(styles.button, mods, [styles[theme], className])}
                type="button"
                disabled={disabled}
                {...rest}
            >
                {children}
            </button>
        );
    }
);
