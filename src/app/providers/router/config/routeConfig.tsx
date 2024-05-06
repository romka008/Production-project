import { AppRouteProps } from "@/shared/types/router";

import { UserRole } from "@/entities/User";
import { AppRoutes, RouterPath } from "@/shared/const/router";
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
        path: RouterPath.main,
        element: <MainPage />,
    },
    [AppRoutes.PROFILE]: {
        path: `${RouterPath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.USER],
    },
    [AppRoutes.ABOUT]: {
        path: RouterPath.about,
        element: <AboutPage />,
    },
    [AppRoutes.ARTICLES]: {
        path: RouterPath.articles,
        element: <ArticlesPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.USER],
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: `${RouterPath.article_details}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.USER],
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: `${RouterPath.article_create}`,
        element: <ArticleEditPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.USER],
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: `${RouterPath.article_edit}`,
        element: <ArticleEditPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.USER],
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: `${RouterPath.admin_panel}`,
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
    },
    [AppRoutes.NOT_FOUND]: {
        path: RouterPath.not_found,
        element: <NotFoundPage />,
    },
    [AppRoutes.FORBIDDEN]: {
        path: RouterPath.forbidden,
        element: <ForbiddenPage />,
    },
};
