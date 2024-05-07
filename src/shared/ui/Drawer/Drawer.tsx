import { ReactNode, memo, useCallback, useEffect } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { useModal } from "@/shared/lib/hooks/useModal/useModal";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { Portal } from "../Portal/Portal";
import { Overlay } from "../Overlay/Overlay";

import styles from "./Drawer.module.scss";
import { AnimationProvider, useAnimationLibs } from "@/shared/lib/components/AnimationProvider";

interface IDrawerProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
    children?: ReactNode;
}

const height = window.innerHeight - 100;

export const DrawerContent = memo(
    ({ className, isOpen, onClose, lazy, children }: IDrawerProps) => {
        const { theme } = useTheme();
        const { Spring, Gesture } = useAnimationLibs();

        const { isMounted, isClosing } = useModal({
            animationDelay: 300,
            isOpen,
            onClose,
        });

        const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

        const bind = Gesture.useDrag(
            ({ last, velocity: [, vy], direction: [, dy], offset: [, oy], cancel, canceled }) => {
                if (oy < -70) cancel();

                if (last) {
                    oy > height * 0.5 || (vy > 0.5 && dy > 0) ? close() : openDrawer({ canceled });
                } else api.start({ y: oy, immediate: true });
            },
            { from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true }
        );

        const openDrawer = useCallback(
            ({ canceled }: { canceled: boolean }) => {
                api.start({
                    y: 0,
                    immediate: false,
                    config: canceled ? Spring.config.wobbly : Spring.config.stiff,
                });
            },
            [Spring.config.stiff, Spring.config.wobbly, api]
        );

        useEffect(() => {
            if (isOpen) {
                openDrawer({ canceled: false });
            }
        }, [api, isOpen, openDrawer]);

        const close = (velocity = 0) => {
            api.start({
                y: height,
                immediate: false,
                config: { ...Spring.config.stiff, velocity },
                onResolve: onClose,
            });
        };

        const display = y.to(py => (py < height ? "block" : "none"));

        if ((lazy && !isMounted) || !isOpen) {
            return null;
        }

        const mods = {
            [styles.isClosing]: isClosing,
            [styles.opened]: isOpen,
        };

        return (
            <Portal>
                <div className={classNames(styles.drawer, mods, [className, theme])}>
                    <Overlay onClick={() => close()} />
                    <Spring.a.div
                        className={styles.sheet}
                        {...bind()}
                        style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
                    >
                        {children}
                    </Spring.a.div>
                </div>
            </Portal>
        );
    }
);

const DrawerAsync = (props: IDrawerProps) => {
    const { isLoaded } = useAnimationLibs();

    if (!isLoaded) {
        return null;
    }

    return <DrawerContent {...props} />;
};

export const Drawer = (props: IDrawerProps) => {
    return (
        <AnimationProvider>
            <DrawerAsync {...props} />
        </AnimationProvider>
    );
};
