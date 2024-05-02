import { memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Page } from "@/widgets/Page/Page";

import styles from "./ArticleEditPage.module.scss";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export interface IArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo(({ className }: IArticleEditPageProps) => {
    const { t } = useTranslation("article");
    const { id } = useParams();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames(styles.articleEditPage, {}, [className])}>
            {isEdit ? t("Редактировать статьи с ID = ") + id : t("Создание новой статьи")}
        </Page>
    );
});

export default ArticleEditPage;
