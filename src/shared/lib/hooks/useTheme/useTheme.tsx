import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";
import { Theme } from "../../../const/theme";

export interface IUseThemeResult {
    toogleTheme: (saveAction: (theme: Theme) => void) => void;
    theme: Theme;
}

export const useTheme = (): IUseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toogleTheme = (saveAction: (theme: Theme) => void) => {
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

        saveAction?.(newTheme);
    };

    return { theme: theme || Theme.LIGHT, toogleTheme };
};
