export enum AppRoutes {
    MAIN = "main",
    PROFILE = "profile",
    ABOUT = "about",
    ARTICLES = "articles",
    ARTICLE_DETAILS = "article_details",
    ARTICLE_CREATE = "article_create",
    ARTICLE_EDIT = "article_edit",
    ADMIN_PANEL = "admin_panel",
    NOT_FOUND = "not_found",
    FORBIDDEN = "forbidden",
}

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.PROFILE]: "/profile/", // + :id
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.ARTICLES]: "/articles",
    [AppRoutes.ARTICLE_DETAILS]: "/articles/", // + :id
    [AppRoutes.ARTICLE_CREATE]: "/articles/new",
    [AppRoutes.ARTICLE_EDIT]: "/articles/:id/edit",
    [AppRoutes.ADMIN_PANEL]: "/admin",
    [AppRoutes.NOT_FOUND]: "/*",
    [AppRoutes.FORBIDDEN]: "/forbidden",
};
