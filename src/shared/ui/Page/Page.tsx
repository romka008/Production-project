import { MutableRefObject, ReactNode, useRef } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";

import styles from "./Page.module.scss";

interface IPageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = ({ className, children, onScrollEnd }: IPageProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({ wrapperRef, triggerRef, callback: onScrollEnd });

    return (
        <section ref={wrapperRef} className={classNames(styles.page, {}, [className])}>
            {children} <div ref={triggerRef} />
        </section>
    );
};
