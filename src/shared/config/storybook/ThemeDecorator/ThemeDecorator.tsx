// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { Theme } from "@/shared/const/theme";

// eslint-disable-next-line react/display-name, @typescript-eslint/no-explicit-any
export const ThemeDecorator = (theme: Theme) => (Story: any) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <Story />
        </div>
    </ThemeProvider>
);
