import { useCallback, useEffect, useRef, useState } from "react";

interface IuseModalProps {
    animationDelay: number;
    onClose?: () => void;
    isOpen?: boolean;
}

export const useModal = ({ onClose, isOpen, animationDelay }: IuseModalProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const close = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [animationDelay, onClose]);

    const onKeyDown = useCallback(
        (e: globalThis.KeyboardEvent) => {
            if (e.key === "Escape") {
                close();
            }
        },
        [close]
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeyDown);
        }

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [isOpen, onKeyDown]);

    return {
        isClosing,
        isMounted,
        close,
    };
};
