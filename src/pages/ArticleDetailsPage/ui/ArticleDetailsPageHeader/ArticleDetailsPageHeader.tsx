import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";

import styles from "./ArticleDetailsPageHeader.module.scss";
import { memo, useCallback } from "react";
import { Button } from "shared/ui/Button/Button";
import { useNavigate } from "react-router-dom";
import { RouterPath } from "shared/config/routerConfig/routerConfig";
import { useSelector } from "react-redux";
import { getArticleDetailsData } from "../../../../entities/Article";
import { getCanEditArticle } from "../../model/selectors/article";

interface IArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo(({ className }: IArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation("article");
    const navigate = useNavigate();
    const isCanEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
        navigate(`${RouterPath.article_details + article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
        <div className={classNames(styles.articleDetailsPageHeader, {}, [])}>
            <Button onClick={onBackToList}>{t("Назад к списку")}</Button>
            {isCanEdit && (
                <Button className={styles.editBtn} onClick={onBackToList}>
                    {t("Редактировать")}
                </Button>
            )}
        </div>
    );
});
