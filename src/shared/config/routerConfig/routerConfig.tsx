import { RouteProps } from "react-router-dom";

import { AboutPageLazy } from "pages/AboutPage";
import { MainPageLazy } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoudPage";

export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    NOT_FOUND = "not_found",
    FORBIDDEN = "forbidden",
}

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.NOT_FOUND]: "/*",
    [AppRoutes.FORBIDDEN]: "/forbidden",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RouterPath.main,
        element: <MainPageLazy />,
    },
    [AppRoutes.ABOUT]: {
        path: RouterPath.about,
        element: <AboutPageLazy />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RouterPath.not_found,
        element: <NotFoundPage />,
    },
    [AppRoutes.FORBIDDEN]: {
        path: RouterPath.forbidden,
        element: <NotFoundPage />,
    },
};
