import {ReactNode} from "react";
import {Link, LinkProps} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";

import styles from "./AppLink.module.scss";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}

interface IAppLinkProps extends LinkProps {
    to: string;
    children: ReactNode;
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink = ({to, className, theme = AppLinkTheme.PRIMARY, children}: IAppLinkProps) => {
    return (
        <Link className={classNames(styles.appLink, {}, [className, styles[theme]])} to={to}>
            {children}
        </Link>
    );
};
