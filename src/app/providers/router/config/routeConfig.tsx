import { AppRouteProps } from "@/shared/types/router";

import { UserRole } from "@/entities/User";
import {
    AppRoutes,
    getRouteAbout,
    getRouteAdminPanel,
    getRouteArticleCreate,
    getRouteArticleEdit,
    getRouteArticles,
    getRouteArticlesDetails,
    getRouteForbidden,
    getRouteMain,
    getRouteNotFound,
    getRouteProfile,
} from "@/shared/const/router";
import { AdminPanelPage } from "@/pages/AdminPanelPage";
import { ForbiddenPage } from "@/pages/ForbiddenPage";
import { NotFoundPage } from "@/pages/NotFoudPage";
import { MainPage } from "@/pages/MainPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { AboutPage } from "@/pages/AboutPage";
import { ArticlesPage } from "@/pages/ArticlesPage";
import { ArticleDetailsPage } from "@/pages/ArticleDetailsPage";
import { ArticleEditPage } from "@/pages/ArticleEditPage";

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.PROFILE]: {
        path: getRouteProfile(":id"),
        element: <ProfilePage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.USER],
    },
    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage />,
    },
    [AppRoutes.ARTICLES]: {
        path: getRouteArticles(),
        element: <ArticlesPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.USER],
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: getRouteArticlesDetails(":id"),
        element: <ArticleDetailsPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.USER],
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: getRouteArticleCreate(),
        element: <ArticleEditPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.USER],
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: getRouteArticleEdit(":id"),
        element: <ArticleEditPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.USER],
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: getRouteAdminPanel(),
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
    },
    [AppRoutes.NOT_FOUND]: {
        path: getRouteNotFound(),
        element: <NotFoundPage />,
    },
    [AppRoutes.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
    },
};
