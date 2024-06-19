import { ReactNode, useEffect, useMemo, useState } from "react";
import { ThemeContext } from "@/shared/lib/context/ThemeContext";
import { Theme } from "@/shared/const/theme";
import { LOCAL_STORAGE_THEME_KEY } from "@/shared/const/localstorage";

interface IThemeProviderProps {
    children: ReactNode;
    initialTheme?: Theme;
}

const ThemeProvider = ({ initialTheme, children }: IThemeProviderProps) => {
    const [isThemeInited, setIsThemeInited] = useState(false);
    const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

    const [theme, setTheme] = useState(initialTheme || fallbackTheme || Theme.LIGHT);

    useEffect(() => {
        if (!isThemeInited && initialTheme) {
            setTheme(initialTheme);
            setIsThemeInited(true);
        }
    }, [initialTheme, isThemeInited]);

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }, [theme]);

    const defaultProps = useMemo(
        () => ({
            theme: theme,
            setTheme: setTheme,
        }),
        [theme]
    );

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
