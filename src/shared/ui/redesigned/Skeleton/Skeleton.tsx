import { CSSProperties, memo } from "react";
import styles from "./Skeleton.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface ISkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Skeleton = memo(({ className, height, width, border }: ISkeletonProps) => {
    const localStyle: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return <div className={classNames(styles.skeleton, {}, [className])} style={localStyle} />;
});
