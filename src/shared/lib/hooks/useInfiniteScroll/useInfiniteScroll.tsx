import { MutableRefObject, useEffect } from "react";

export interface UseInfiniteScrollOptions {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef?: MutableRefObject<HTMLElement> | null;
}

export const useInfiniteScroll = ({
    callback,
    triggerRef,
    wrapperRef,
}: UseInfiniteScrollOptions) => {
    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        const triggerElement = triggerRef.current;
        const wrapperElement = wrapperRef?.current || null;
        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: "0px",
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting || entry.target) {
                    callback();
                }
            }, options);
            observer.observe(triggerElement);
        }

        return () => {
            if (observer && triggerElement) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(triggerElement);
            }
        };
    }, [triggerRef, wrapperRef, callback]);
};
