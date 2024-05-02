import { CSSProperties, useMemo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./Avatar.module.scss";

interface IAvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = ({ className, src, size, alt }: IAvatarProps) => {
    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size || 200,
            height: size || 200,
        };
    }, [size]);

    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.avatar, {}, [className])}
        />
    );
};
