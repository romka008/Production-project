import { memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { HStack } from "../Stack";
import { Text, TextAlign, TextTheme } from "../Text";

import styles from "./AppLogo.module.scss";

interface IAppLogoProps {
    className?: string;
}

export const AppLogo = memo(({ className }: IAppLogoProps) => {
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
        </HStack>
    );
});
