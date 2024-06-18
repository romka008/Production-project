import { createSelector } from "@reduxjs/toolkit";
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from "@/shared/const/router";
import MainIconDeprecated from "@/shared/assets/icons/main-20-20.svg";
import AboutIconDeprecated from "@/shared/assets/icons/about-20-20.svg";
import ProfileIconDeprecated from "@/shared/assets/icons/profile-20-20.svg";
import ArticleIconDeprecated from "@/shared/assets/icons/article-20-20.svg";
import MainIcon from "@/shared/assets/icons/Home.svg";
import AboutIcon from "@/shared/assets/icons/Info.svg";
import ProfileIcon from "@/shared/assets/icons/Avatar.svg";
import ArticleIcon from "@/shared/assets/icons/Article.svg";
import { SidebarItemType } from "../types/sidebar";
import { getUserAuthData } from "@/entities/User";
import { toggleFeatures } from "@/shared/lib/features";

export const getSidebarItems = createSelector(getUserAuthData, userData => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            text: "Главная",
            Icon: toggleFeatures({
                name: "isAppRedesigned",
                on: () => MainIcon,
                off: () => MainIconDeprecated,
            }),
        },
        {
            path: getRouteAbout(),
            text: "О сайте",
            Icon: toggleFeatures({
                name: "isAppRedesigned",
                on: () => AboutIcon,
                off: () => AboutIconDeprecated,
            }),
        },
    ];
    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData?.id),
                text: "Профиль",
                Icon: toggleFeatures({
                    name: "isAppRedesigned",
                    on: () => ProfileIcon,
                    off: () => ProfileIconDeprecated,
                }),
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                text: "Статьи",
                Icon: toggleFeatures({
                    name: "isAppRedesigned",
                    on: () => ArticleIcon,
                    off: () => ArticleIconDeprecated,
                }),
                authOnly: true,
            }
        );
    }
    return sidebarItemsList;
});
