import React, { memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import styles from "./Icon.module.scss";

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, "onClick">;

interface IconBaseProps extends React.SVGProps<SVGSVGElement> {
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    className?: string;
}

interface NonClickableIconProps extends IconBaseProps {
    clickable?: false;
}

interface ClickableIconProps extends IconBaseProps {
    clickable: true;
    onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableIconProps;

export const Icon = memo((props: IconProps) => {
    const { className, Svg, height = 32, width = 32, clickable, ...otherProps } = props;

    return (
        <Svg
            className={classNames(styles.icon, { [styles.iconClickable]: clickable }, [className])}
            height={height}
            width={width}
            {...otherProps}
            onClick={props.onClick ?? undefined}
        />
    );
});
