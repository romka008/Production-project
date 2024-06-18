import { ReactNode, memo } from "react";
import { NavLink, LinkProps } from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/classNames";

import styles from "./AppLink.module.scss";

export type AppLinkVariant = "primary" | "red";

interface IAppLinkProps extends LinkProps {
    children: ReactNode;
    className?: string;
    variant?: AppLinkVariant;
    activeClassName?: string;
}

export const AppLink = memo(
    ({
        to,
        className,
        variant = "primary",
        children,
        activeClassName = "",
        ...otherProps
    }: IAppLinkProps) => {
        return (
            <NavLink
                className={({ isActive }) => {
                    return classNames(styles.appLink, { [activeClassName]: isActive }, [
                        className,
                        styles[variant],
                    ]);
                }}
                to={to}
                {...otherProps}
            >
                {children}
            </NavLink>
        );
    }
);
