import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Page } from "@/widgets/Page";

import styles from "./NotFoundPage.module.scss";

interface INotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: INotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <Page
            data-testid="NotFoundPage"
            className={classNames(styles.notFoundPage, {}, [className])}
        >
            {t("Страница не найдена")}
        </Page>
    );
};
