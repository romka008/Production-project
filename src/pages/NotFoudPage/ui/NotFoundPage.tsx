import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

import styles from "./NotFoundPage.module.scss";

interface INotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: INotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.notFoundPage, {}, [className])}>
            {t("Страница не найдена")}
        </div>
    );
};
