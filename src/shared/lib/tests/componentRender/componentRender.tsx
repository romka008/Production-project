import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import { ReducersMapObject } from "@reduxjs/toolkit";

import i18nForTests from "@/shared/config/i18n/i18nForTests";
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { Theme } from "@/shared/const/theme";
// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import { ThemeProvider } from "@/app/providers/ThemeProvider";
// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import "@/app/styles/index.scss";

export interface IComponentRenderProps {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
    theme?: Theme;
}

interface ITestProviderProps {
    children: ReactNode;
    options?: IComponentRenderProps;
}

export const TestProvider = ({ children, options = {} }: ITestProviderProps) => {
    const { route = "/", initialState, asyncReducers, theme = Theme.LIGHT } = { ...options };
    return (
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
                <I18nextProvider i18n={i18nForTests}>
                    <ThemeProvider initialTheme={theme}>
                        <div className={`app ${theme}`}>{children}</div>
                    </ThemeProvider>
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    );
};

export const ComponentRender = (component: ReactNode, options: IComponentRenderProps = {}) => {
    return render(<TestProvider options={options}>{component}</TestProvider>);
};
