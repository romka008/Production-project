import { ButtonHTMLAttributes, ReactNode, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import styles from "./Button.module.scss";

export type ButtonVariant = "clear" | "outline" | "filled";

export type ButtonSize = "m" | "l" | "xl";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    /**
     * Содержимое кнопки
     */
    children: ReactNode;
    /**
     * Тема кнопки. Отвечает за визуал (в рамке, без стилей, противоложнц теме приложения цвет и тд)
     */
    variant?: ButtonVariant;
    /**
     * Флаг, делающий кнопку квадратной
     */
    square?: boolean;
    /**
     * Размер кнопки в соответствии с дизайн системой
     */
    size?: ButtonSize;
    /**
     * Флаг отвечающий за работу кнопки
     */
    disabled?: boolean;
    /**
     * Увеличивает кнопку на всю свободную ширину
     */
    fullWidth?: boolean;
}

export const Button = memo(
    ({
        className,
        children,
        variant = "outline",
        square,
        disabled,
        size = "m",
        fullWidth,
        ...rest
    }: IButtonProps) => {
        const mods = {
            [styles.square]: square,
            [styles.disabled]: disabled,
            [styles.fullWidth]: fullWidth,
        };

        return (
            <button
                className={classNames(styles.button, mods, [
                    styles[variant],
                    styles[size],
                    className,
                ])}
                type="button"
                disabled={disabled}
                {...rest}
            >
                {children}
            </button>
        );
    }
);
