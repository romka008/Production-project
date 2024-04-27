import { ReactNode, memo } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { useModal } from "shared/lib/hooks/useModal/useModal";
import { useTheme } from "app/providers/ThemeProvider";
import { Portal } from "../Portal/Portal";
import { Overlay } from "../Overlay/Overlay";

import styles from "./Drawer.module.scss";

interface IDrawerProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
    children?: ReactNode;
}

export const Drawer = memo(({ className, isOpen, onClose, lazy, children }: IDrawerProps) => {
    const { theme } = useTheme();

    const { close, isMounted, isClosing } = useModal({
        animationDelay: 300,
        isOpen,
        onClose,
    });

    if (lazy && !isMounted) {
        return null;
    }

    const mods = {
        [styles.isClosing]: isClosing,
        [styles.opened]: isOpen,
    };

    return (
        <Portal>
            <div className={classNames(styles.drawer, mods, [className, theme])}>
                <Overlay onClick={close} />
                <div className={styles.content}>{children}</div>
            </div>
        </Portal>
    );
});
