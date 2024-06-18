import { memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { HStack } from "../../deprecated/Stack";
import { Text, TextAlign, TextTheme } from "../../deprecated/Text";

import styles from "./AppLogo.module.scss";

interface IAppLogoProps {
    className?: string;
    size?: number;
}

export const AppLogo = memo(({ className, size = 50 }: IAppLogoProps) => {
    return (
        <HStack max justify="center" className={classNames(styles.appLogoWrapper, {}, [className])}>
            <Text
                align={TextAlign.CENTER}
                theme={TextTheme.INVERTED}
                className={styles.appName}
                title="App"
            />
            <div className={styles.gradientBig} />
            <div className={styles.gradientSmall} />
            {/* у меня текст, можно вставить svg */}
            {/* <Svg width={size} height={size} /> */}
        </HStack>
    );
});
