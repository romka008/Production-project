import { memo } from "react";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import LightIcon from "widgets/assets/icons/theme-light.svg";
import DarkIcon from "widgets/assets/icons/theme-dark.svg";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

import styles from "./ThemeSwitcher.module.scss";

interface IThemeSwitcherProps {
    className?: string;
}
export const ThemeSwitcher = memo(({ className }: IThemeSwitcherProps) => {
    const { theme, toogleTheme } = useTheme();

    return (
        <Button
            className={classNames(styles.themeSwitcher, {}, [className])}
            onClick={toogleTheme}
            theme={ButtonTheme.CLEAR}
        >
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
});
