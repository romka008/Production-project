import { MutableRefObject, ReactNode, UIEvent, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { classNames } from "@/shared/lib/classNames/classNames";
import { useInfiniteScroll } from "@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "@/shared/lib/hooks/UseInitialEffect/UseInitialEffect";
import { useThrottle } from "@/shared/lib/hooks/useThrottle/useThrottle";
import { ITestProps } from "@/shared/types/tests";
import { getScrollSaveByPath, scrollSaveActions } from "@/features/ScrollSave";
import { StateSchema } from "@/app/providers/StoreProvider";

import styles from "./Page.module.scss";
import { toggleFeatures } from "@/shared/lib/features";

interface IPageProps extends ITestProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = (props: IPageProps) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const location = useLocation();
    const scrollPosition = useSelector((state: StateSchema) =>
        getScrollSaveByPath(state, location.pathname)
    );

    useInfiniteScroll({ wrapperRef, triggerRef, callback: onScrollEnd });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll = useThrottle((e: UIEvent<HTMLElement>) => {
        dispatch(
            scrollSaveActions.setScrollPosition({
                path: location.pathname,
                position: e.currentTarget.scrollTop,
            })
        );
    }, 500);

    return (
        <main
            ref={wrapperRef}
            className={classNames(
                toggleFeatures({
                    name: "isAppRedesigned",
                    on: () => styles.pageRedesigned,
                    off: () => styles.page,
                }),
                {},
                [className]
            )}
            onScroll={onScroll}
            data-testid={props["data-testid"] ?? "Page"}
        >
            {children}
            {onScrollEnd ? <div className={styles.trigger} ref={triggerRef} /> : null}
        </main>
    );
};
