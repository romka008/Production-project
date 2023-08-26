import {useContext} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

interface IUseThemeResult {
    toogleTheme: () => void;
    theme: Theme;
}

export const useTheme = (): IUseThemeResult => {
    const {theme, setTheme} = useContext(ThemeContext);

    const toogleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {theme, toogleTheme};
};
