import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import styles from "./Flex.module.scss";

export type FlexJustify = "start" | "center" | "end" | "between";
export type FlexAlign = "start" | "center" | "end";
export type FlexDirection = "row" | "column";
export type FlexGap = "4" | "8" | "16" | "32";

const justifyClasses: Record<FlexJustify, string> = {
    start: styles.justifyStart,
    center: styles.justifyCenter,
    end: styles.justifyEnd,
    between: styles.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
    start: styles.alignStart,
    center: styles.alignCenter,
    end: styles.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
    row: styles.directionRow,
    column: styles.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    4: styles.gap4,
    8: styles.gap8,
    16: styles.gap16,
    32: styles.gap32,
};

type TDivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface IFlexProps extends TDivProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Flex = ({
    className,
    children,
    justify = "start",
    align = "center",
    direction = "row",
    gap,
    max,
    ...otherProps
}: IFlexProps) => {
    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ];

    const mods = {
        [styles.max]: max,
    };

    return (
        <div className={classNames(styles.flex, mods, classes)} {...otherProps}>
            {children}
        </div>
    );
};
