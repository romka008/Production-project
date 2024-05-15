import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button";
import { getRouteArticleEdit, getRouteArticles } from "@/shared/const/router";
import { HStack } from "@/shared/ui/Stack";
import { getArticleDetailsData } from "@/entities/Article";
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
        navigate(getRouteArticles());
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        if (article?.id) {
            navigate(getRouteArticleEdit(article.id));
        }
    }, [article?.id, navigate]);

    return (
        <HStack max justify="between" className={classNames("", {}, [className])}>
            <Button onClick={onBackToList}>{t("Назад к списку")}</Button>
            {isCanEdit && <Button onClick={onEditArticle}>{t("Редактировать")}</Button>}
        </HStack>
    );
});
