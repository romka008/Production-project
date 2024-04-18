import { memo } from "react";
import { useTranslation } from "react-i18next";

import { Page } from "widgets/Page/Page";
import { classNames } from "shared/lib/classNames/classNames";

import styles from "./ForbiddenPage.module.scss";

interface IForbiddenPageProps {
    className?: string;
}

export const ForbiddenPage = memo((props: IForbiddenPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <Page className={classNames(styles.forbiddenPage, {}, [className])}>
            {t("У вас нет доступа к этой странице")}
        </Page>
    );
});
