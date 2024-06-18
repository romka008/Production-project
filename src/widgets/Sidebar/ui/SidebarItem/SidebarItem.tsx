import { memo } from "react";
import { useSelector } from "react-redux";

import { ToggleFeatures } from "@/shared/lib/features";
import { getUserAuthData } from "@/entities/User";
import { SidebarItemType } from "../../model/types/sidebar";

import { SidebarItemDeprecated } from "./SidebarItemDeprecated/SidebarItemDeprecated";
import { SidebarItemRedesigned } from "./SidebarItemRedesigned";

interface ISidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: ISidebarItemProps) => {
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <ToggleFeatures
            name="isAppRedesigned"
            on={<SidebarItemRedesigned item={item} collapsed={collapsed} />}
            off={<SidebarItemDeprecated item={item} collapsed={collapsed} />}
        />
    );
});
