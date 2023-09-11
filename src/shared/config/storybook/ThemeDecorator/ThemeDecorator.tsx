import { Theme, ThemeProvider } from "app/providers/ThemeProvider";

// eslint-disable-next-line react/display-name, @typescript-eslint/no-explicit-any
export const ThemeDecorator = (theme: Theme) => (Story: any) =>
    (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <Story />
            </div>
        </ThemeProvider>
    );
