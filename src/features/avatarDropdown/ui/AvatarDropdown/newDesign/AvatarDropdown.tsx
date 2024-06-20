import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";

import styles from "./AvatarDropdown.module.scss";
import { getRouteAdminPanel, getRouteProfile } from "@/shared/const/router";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from "@/entities/User";
import { Dropdown } from "@/shared/ui/redesigned/Popups";
import { Avatar } from "@/shared/ui/redesigned/Avatar";

interface IAvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo(({ className }: IAvatarDropdownProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const authData = useSelector(getUserAuthData);

    const isAdminPanelAvailable = isAdmin || isManager;

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData) {
        return null;
    }

    const items = [
        ...(isAdminPanelAvailable
            ? [
                  {
                      content: t("Админка"),
                      href: getRouteAdminPanel(),
                      key: "1",
                  },
              ]
            : []),
        {
            content: t("Профиль"),
            href: getRouteProfile(authData.id),
            key: "2",
        },
        {
            content: t("Выйти"),
            onClick: onLogout,
            key: "3",
        },
    ];

    return (
        <Dropdown
            className={classNames(styles.AvatarDropdown, {}, [className])}
            trigger={<Avatar size={40} src={authData.avatar} />}
            items={items}
            direction="bottom left"
        />
    );
});
