import { createSelector } from "@reduxjs/toolkit";
import { RouterPath } from "@/shared/config/routerConfig/routerConfig";
import MainIcon from "../../../../widgets/assets/icons/main-20-20.svg";
import AboutIcon from "../../../../widgets/assets/icons/about-20-20.svg";
import ProfileIcon from "../../../../widgets/assets/icons/profile-20-20.svg";
import ArticleIcon from "../../../../widgets/assets/icons/article-20-20.svg";
import { SidebarItemType } from "../types/sidebar";
import { getUserAuthData } from "@/entities/User";

export const getSidebarItems = createSelector(getUserAuthData, userData => {
    const sidebarItemsList: SidebarItemType[] = [
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
    ];
    if (userData) {
        sidebarItemsList.push(
            {
                path: RouterPath.profile + userData?.id,
                text: "Профиль",
                Icon: ProfileIcon,
                authOnly: true,
            },
            {
                path: RouterPath.articles,
                text: "Статьи",
                Icon: ArticleIcon,
                authOnly: true,
            }
        );
    }
    return sidebarItemsList;
});
