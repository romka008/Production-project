import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./StickyContentLayout.module.scss";
import { ReactElement } from "react";

interface IStickyContentLayoutProps {
    className?: string;
    left?: ReactElement;
    content: ReactElement;
    right?: ReactElement;
}

export const StickyContentLayout = ({
    className,
    left,
    content,
    right,
}: IStickyContentLayoutProps) => {
    return (
        <div className={classNames(styles.stickyContentLayout, {}, [className])}>
            {right && <div className={styles.left}>{left}</div>}
            <div className={styles.content}>{content}</div>
            {left && <div className={styles.right}>{right}</div>}
        </div>
    );
};
