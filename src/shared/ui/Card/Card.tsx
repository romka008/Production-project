import { HTMLAttributes, ReactNode } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import styles from "./Card.module.scss";

export enum CardTheme {
    NORMAL = "normal",
    OUTLINED = "outlined",
}

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    theme?: CardTheme;
    fullWidth?: boolean;
}

export const Card = ({
    children,
    className,
    theme = CardTheme.NORMAL,
    fullWidth,
    ...rest
}: ICardProps) => {
    const mods = { [styles.fullWidth]: fullWidth };
    return (
        <div className={classNames(styles.card, mods, [className, styles[theme]])} {...rest}>
            {children}
        </div>
    );
};
