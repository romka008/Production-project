import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./Text.module.scss";

export type TextVariant = "primary" | "error" | "accent";

export type TextAlign = "right" | "left" | "center";

export type TextSize = "s" | "m" | "l";

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: TextVariant;
    align?: TextAlign;
    size?: TextSize;
    "data-testid"?: string;
}

type HeaderTagType = "h1" | "h2" | "h3";

const mapSizeToClass: Record<TextSize, string> = {
    s: "size_s",
    m: "size_m",
    l: "size_l",
};

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    s: "h3",
    m: "h2",
    l: "h1",
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        variant = "primary",
        align = "left",
        size = "m",
        "data-testid": dataTestId = "Text",
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];
    const sizeClass = mapSizeToClass[size];

    return (
        <div
            className={classNames(styles.Text, {}, [
                styles[variant],
                styles[align],
                styles[size],
                sizeClass,
                className,
            ])}
        >
            {title && (
                <HeaderTag className={styles.title} data-testid={`${dataTestId}.Header`}>
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p className={styles.text} data-testid={`${dataTestId}.Paragraph`}>
                    {text}
                </p>
            )}
        </div>
    );
});
