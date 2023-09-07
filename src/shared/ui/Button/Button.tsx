import { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Button.module.scss";

export enum ButtonTheme {
    CLEAR = "clear",
    OUTLINE = "outline",
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
}

export const Button = ({
    className,
    children,
    theme,
    square,
    size = ButtonSize.M,
    ...rest
}: IButtonProps) => {
    return (
        <button
            className={classNames(
                styles.button,
                { [styles.square]: square, [styles[size]]: true },
                [styles[theme], className]
            )}
            type="button"
            {...rest}
        >
            {children}
        </button>
    );
};
