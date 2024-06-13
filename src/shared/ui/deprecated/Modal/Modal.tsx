import { ReactNode } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Portal } from "../Portal/Portal";
import { Overlay } from "../Overlay/Overlay";

import styles from "./Modal.module.scss";
import { useModal } from "@/shared/lib/hooks/useModal/useModal";

interface IModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
    children?: ReactNode;
}

const ANIMATION_DELAY = 300;

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Modal = ({ className, isOpen, onClose, lazy, children }: IModalProps) => {
    const { close, isMounted, isClosing } = useModal({
        animationDelay: ANIMATION_DELAY,
        isOpen,
        onClose,
    });

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div
                className={classNames(
                    styles.modal,
                    { [styles.opened]: isOpen, [styles.isClosing]: isClosing },
                    [className]
                )}
            >
                <Overlay onClick={close} />
                <div className={styles.content} onClick={onContentClick}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
