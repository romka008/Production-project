import { HTMLAttributes, ReactNode } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import styles from "./Card.module.scss";

export type CardVariant = "normal" | "light" | "outlined";
export type CardPading = "0" | "8" | "16" | "24";
export type CardBorder = "normal" | "round";

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    variant?: CardVariant;
    fullWidth?: boolean;
    padding?: CardPading;
    border?: CardBorder;
}

const mapPaddingToClass: Record<CardPading, string> = {
    "0": "padding_0",
    "8": "padding_8",
    "16": "padding_16",
    "24": "padding_24",
};

export const Card = ({
    children,
    className,
    variant = "normal",
    fullWidth,
    padding = "8",
    border = "normal",
    ...rest
}: ICardProps) => {
    const mods = { [styles.fullWidth]: fullWidth };

    const paddingClass = mapPaddingToClass[padding];

    return (
        <div
            className={classNames(styles.card, mods, [
                styles[variant],
                styles[paddingClass],
                styles[border],
                className,
            ])}
            {...rest}
        >
            {children}
        </div>
    );
};
