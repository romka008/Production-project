import { RouteProps } from "react-router-dom";

import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { ProfilePage } from "pages/ProfilePage";
import { NotFoundPage } from "pages/NotFoudPage";

export enum AppRoutes {
    MAIN = "main",
    PROFILE = "profile",
    ABOUT = "about",
    NOT_FOUND = "not_found",
    FORBIDDEN = "forbidden",
}

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
    // roles?: UserRole[];
};

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.PROFILE]: "/profile",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.NOT_FOUND]: "/*",
    [AppRoutes.FORBIDDEN]: "/forbidden",
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RouterPath.main,
        element: <MainPage />,
    },
    [AppRoutes.PROFILE]: {
        path: RouterPath.profile,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ABOUT]: {
        path: RouterPath.about,
        element: <AboutPage />,
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
