import { memo } from "react";
import { useTranslation } from "react-i18next";

import { Page } from "widgets/Page/Page";
import { classNames } from "shared/lib/classNames/classNames";

import styles from "./AdminPanelPage.module.scss";

interface IAdminPanelPageProps {
    className?: string;
}

export const AdminPanelPage = memo(({ className }: IAdminPanelPageProps) => {
    const { t } = useTranslation();

    return <Page className={classNames(styles.AdminPanelPage, {}, [className])}>Админка</Page>;
});
