import { memo } from "react";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { Theme } from "@/shared/const/theme";
import { classNames } from "@/shared/lib/classNames/classNames";
import { LightIcon, DarkIcon } from "@/shared/assets";
import { Button, ButtonTheme } from "@/shared/ui/Button";

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