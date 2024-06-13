import { classNames } from "@/shared/lib/classNames/classNames";

import styles from "./Loader.module.scss";

interface ILoaderProps {
    className?: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Loader = ({ className }: ILoaderProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={classNames(styles.loader, {}, [])}></div>
        </div>
    );
};
