import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Text } from "shared/ui/Text/Text";
import { classNames } from "shared/lib/classNames/classNames";
import { Icon } from "shared/ui/Icon/Icon";
import { Card } from "shared/ui/Card/Card";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Button } from "shared/ui/Button/Button";
import { RouterPath } from "shared/config/routerConfig/routerConfig";
import EyeIcon from "widgets/assets/icons/eye-20-20.svg";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import {
    Article,
    ArticleBlockType,
    ArticleTextBlock,
    ArticleView,
} from "../../model/types/article";

import styles from "./ArticleListItem.module.scss";

interface IArticleListItemProps {
    article: Article;
    className?: string;
    view?: ArticleView;
}

export const ArticleListItem = memo(({ article, className, view }: IArticleListItemProps) => {
    const { t } = useTranslation("article");
    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
        navigate(`${RouterPath.articles}/${article.id}`);
    }, [article.id, navigate]);

    const types = <Text text={article.type.join(", ")} className={styles.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={styles.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === ArticleView.LIST) {
        const textBlock = article.blocks.find(
            block => block.type === ArticleBlockType.TEXT
        ) as ArticleTextBlock;

        return (
            <div
                className={classNames(styles.articleTextBlockComponent, {}, [
                    className,
                    styles[view],
                ])}
            >
                <Card className={styles.card}>
                    <div className={styles.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={styles.username} />
                        <Text text={article.createdAt} className={styles.createdAt} />
                    </div>
                    <Text title={article.title} className={styles.title} />
                    {types}
                    <img src={article.img} alt={article.title} className={styles.img} />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={styles.textBlock} />
                    )}
                    <div className={styles.footer}>
                        <Button onClick={onOpenArticle}>{t("Читать далее...")}</Button>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div
            className={classNames(styles.articleTextBlockComponent, {}, [className, styles.PLATE])}
        >
            <Card onClick={onOpenArticle} className={styles.card}>
                <div className={styles.imageWrapper}>
                    <img src={article.img} alt={article.title} className={styles.img} />
                    <Text text={article.createdAt} className={styles.date} />
                </div>
                <div className={styles.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={styles.title} />
            </Card>
        </div>
    );
});
