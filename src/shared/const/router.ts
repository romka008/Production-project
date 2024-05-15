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

export const getRouteMain = () => "/";
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteAbout = () => "/about";
export const getRouteArticles = () => "/articles";
export const getRouteArticlesDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => "/articles/new";
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdminPanel = () => "/admin";
export const getRouteNotFound = () => "/*";
export const getRouteForbidden = () => "/forbidden";
