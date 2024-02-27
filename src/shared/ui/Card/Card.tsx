import { HTMLAttributes, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Card.module.scss";

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}

export const Card = ({ children, className, ...rest }: ICardProps) => {
    return (
        <div className={classNames(styles.card, {}, [className])} {...rest}>
            {children}
        </div>
    );
};
