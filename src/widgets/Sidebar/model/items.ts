import React from "react";
import { RouterPath } from "shared/config/routerConfig/routerConfig";
import MainIcon from "widgets/assets/icons/main-20-20.svg";
import AboutIcon from "widgets/assets/icons/about-20-20.svg";
import ProfileIcon from "widgets/assets/icons/profile-20-20.svg";
import ArticleIcon from "widgets/assets/icons/article-20-20.svg";

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RouterPath.main,
        text: "Главная",
        Icon: MainIcon,
    },
    {
        path: RouterPath.about,
        text: "О сайте",
        Icon: AboutIcon,
    },
    {
        path: RouterPath.profile,
        text: "Профиль",
        Icon: ProfileIcon,
        authOnly: true,
    },
    {
        path: RouterPath.articles,
        text: "Статьи",
        Icon: ArticleIcon,
        authOnly: true,
    },
];
