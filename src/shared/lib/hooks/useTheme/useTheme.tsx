import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";
import { LOCAL_STORAGE_THEME_KEY } from "../../../const/localstorage";
import { Theme } from "../../../const/theme";

export interface IUseThemeResult {
    toogleTheme: (saveAction: (theme: Theme) => void) => void;
    theme: Theme;
}

export const useTheme = (): IUseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);
    // TODO
    document.body.className = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || Theme.LIGHT;

    const toogleTheme = (saveAction: (theme: Theme) => void) => {
        // const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        let newTheme: Theme;

        switch (theme) {
        case Theme.DARK:
            newTheme = Theme.LIGHT;
            break;
        case Theme.LIGHT:
            newTheme = Theme.BLUE;
            break;
        case Theme.BLUE:
            newTheme = Theme.DARK;
            break;
        default:
            newTheme = Theme.LIGHT;
        }

        setTheme?.(newTheme);

        document.body.className = newTheme;

        saveAction?.(newTheme);
        // localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme: theme || Theme.LIGHT, toogleTheme };
};
