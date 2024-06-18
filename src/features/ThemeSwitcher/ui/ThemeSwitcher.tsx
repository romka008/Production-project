import { memo, useCallback } from "react";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { classNames } from "@/shared/lib/classNames/classNames";
import { LightIcon } from "@/shared/assets";
import ThemeIcon from "@/shared/assets/icons/Theme.svg";
import { Button, ButtonTheme } from "@/shared/ui/deprecated/Button";
import { ToggleFeatures } from "@/shared/lib/features";
import { Icon } from "@/shared/ui/redesigned/Icon";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Icon as IconDeprecated } from "@/shared/ui/deprecated/Icon";
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
        <ToggleFeatures
            name="isAppRedesigned"
            on={
                <Icon
                    className={classNames(styles.themeSwitcher, {}, [className])}
                    clickable
                    onClick={onToggleHandler}
                    Svg={ThemeIcon}
                />
            }
            off={
                <Button
                    className={classNames(styles.themeSwitcher, {}, [className])}
                    onClick={onToggleHandler}
                    theme={ButtonTheme.CLEAR}
                >
                    <IconDeprecated Svg={LightIcon} width={40} height={40} inverted />
                    {/* {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />} */}
                </Button>
            }
        />
    );
});
