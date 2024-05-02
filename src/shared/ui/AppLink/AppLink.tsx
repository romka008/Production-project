import { ReactNode, memo } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/classNames";

import styles from "./AppLink.module.scss";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

interface IAppLinkProps extends LinkProps {
    children: ReactNode;
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink = memo(
    ({ to, className, theme = AppLinkTheme.PRIMARY, children, ...otherProps }: IAppLinkProps) => {
        return (
            <Link
                className={classNames(styles.appLink, {}, [className, styles[theme]])}
                to={to}
                {...otherProps}
            >
                {children}
            </Link>
        );
    }
);
