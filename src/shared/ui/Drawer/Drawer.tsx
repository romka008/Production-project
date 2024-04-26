import { ReactNode, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Portal } from "../Portal/Portal";

import styles from "./Drawer.module.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { Overlay } from "../Overlay/Overlay";

interface IDrawerProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
    children?: ReactNode;
}

export const Drawer = memo(({ className, isOpen, onClose, children }: IDrawerProps) => {
    const { theme } = useTheme();

    const mods = {
        [styles.opened]: isOpen,
    };

    return (
        <Portal>
            <div className={classNames(styles.drawer, mods, [className, theme])}>
                <Overlay onClick={onClose} />
                <div className={styles.content}>{children}</div>
            </div>
        </Portal>
    );
});
