import { memo, useCallback } from "react";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { classNames } from "@/shared/lib/classNames/classNames";
import { LightIcon } from "@/shared/assets";
import { Button, ButtonTheme } from "@/shared/ui/deprecated/Button";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Icon } from "@/shared/ui/deprecated/Icon";
import { saveJsonSettings } from "@/entities/User";

import styles from "./ThemeSwitcher.module.scss";

interface IThemeSwitcherProps {
    className?: string;
}
export const ThemeSwitcher = memo(({ className }: IThemeSwitcherProps) => {
    const { theme, toogleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleHandler = useCallback(() => {
        toogleTheme(newTheme => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [dispatch, toogleTheme]);

    return (
        <Button
            className={classNames(styles.themeSwitcher, {}, [className])}
            onClick={onToggleHandler}
            theme={ButtonTheme.CLEAR}
        >
            <Icon Svg={LightIcon} width={40} height={40} inverted />
            {/* {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />} */}
        </Button>
    );
});
