import { classNames } from "shared/lib/classNames/classNames";
import { KeyboardEvent, ReactNode, useCallback, useEffect, useRef, useState } from "react";

import styles from "./Modal.module.scss";

interface IModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
    children?: ReactNode;
}

const ANIMATION_DELAY = 300;

export const Modal = ({ className, isOpen, onClose, children }: IModalProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback(
        (e: globalThis.KeyboardEvent) => {
            if (e.key === "Escape") {
                closeHandler();
            }
        },
        [closeHandler]
    );

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
        };
    }, [isOpen, onKeyDown]);

    return (
        <div
            className={classNames(
                styles.modal,
                { [styles.opened]: isOpen, [styles.isClosing]: isClosing },
                [className]
            )}
        >
            <div className={styles.overlay} onClick={closeHandler}>
                <div className={styles.content} onClick={onContentClick}>
                    {children}
                </div>
            </div>
        </div>
    );
};
