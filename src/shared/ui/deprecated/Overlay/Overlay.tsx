import { classNames } from "@/shared/lib/classNames/classNames";

import styles from "./Overlay.module.scss";

interface IOverlayProps {
    className?: string;
    onClick?: () => void;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Overlay = ({ className, onClick }: IOverlayProps) => {
    return <div className={classNames(styles.overlay, {}, [className])} onClick={onClick} />;
};
