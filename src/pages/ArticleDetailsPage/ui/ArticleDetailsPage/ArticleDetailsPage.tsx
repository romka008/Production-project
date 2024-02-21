import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { ArticleDetails } from "../../../../entities/Article";

import styles from "ArticleDetailsPage.module.scss";

const ArticleDetailsPage = () => {
    const { t } = useTranslation("article");
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <div>{t("Статья не найдена")}</div>;
    }

    return (
        <div>
            <ArticleDetails id={id} />
        </div>
    );
};

export default memo(ArticleDetailsPage);
