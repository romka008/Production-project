import { ImgHTMLAttributes, ReactElement, useState, useLayoutEffect } from "react";

interface IAppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback?: ReactElement;
    errorFallback?: ReactElement;
}

export const AppImage = ({
    className,
    src,
    alt = "image",
    fallback,
    errorFallback,
    ...otherProps
}: IAppImageProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? "";
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }

    return <img className={className} src={src} alt={alt} {...otherProps} />;
};
