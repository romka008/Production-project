import { HTMLAttributes, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Card.module.scss";

export enum CardTheme {
    NORMAL = "normal",
    OUTLINED = "outlined",
}

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    theme?: CardTheme;
}

export const Card = ({ children, className, theme = CardTheme.NORMAL, ...rest }: ICardProps) => {
    return (
        <div className={classNames(styles.card, {}, [className, styles[theme]])} {...rest}>
            {children}
        </div>
    );
};
