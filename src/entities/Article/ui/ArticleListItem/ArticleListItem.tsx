import { HTMLAttributeAnchorTarget, memo } from "react";
import { useTranslation } from "react-i18next";

import { Text } from "@/shared/ui/Text";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Icon } from "@/shared/ui/Icon";
import { Card } from "@/shared/ui/Card";
import { Avatar } from "@/shared/ui/Avatar";
import { Button } from "@/shared/ui/Button";
import { getRouteArticlesDetails } from "@/shared/const/router";
import { AppLink } from "@/shared/ui/AppLink";
import { EyeIcon } from "@/shared/assets";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { Article, ArticleTextBlock } from "../../model/types/article";
import { ArticleBlockType, ArticleView } from "../../model/consts/articleConstst";

import styles from "./ArticleListItem.module.scss";
import { AppImage } from "@/shared/ui/AppImage";
import { Skeleton } from "@/shared/ui/Skeleton";

interface IArticleListItemProps {
    article: Article;
    className?: string;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo(
    ({ article, className, view, target }: IArticleListItemProps) => {
        const { t } = useTranslation("article");

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
                        <AppImage
                            fallback={<Skeleton width={"100%"} height={200} />}
                            src={article.img}
                            alt={article.title}
                            className={styles.img}
                        />
                        {textBlock && (
                            <ArticleTextBlockComponent
                                block={textBlock}
                                className={styles.textBlock}
                            />
                        )}
                        <div className={styles.footer}>
                            <AppLink to={getRouteArticlesDetails(article.id)}>
                                <Button>{t("Читать далее...")}</Button>
                            </AppLink>
                            {views}
                        </div>
                    </Card>
                </div>
            );
        }

        return (
            <AppLink
                target={target}
                to={getRouteArticlesDetails(article.id)}
                className={classNames(styles.articleTextBlockComponent, {}, [
                    className,
                    styles.PLATE,
                ])}
            >
                <Card className={styles.card}>
                    <div className={styles.imageWrapper}>
                        <AppImage
                            fallback={<Skeleton width={200} height={200} />}
                            src={article.img}
                            alt={article.title}
                            className={styles.img}
                        />
                        <Text text={article.createdAt} className={styles.date} />
                    </div>
                    <div className={styles.infoWrapper}>
                        {types}
                        {views}
                    </div>
                    <Text text={article.title} className={styles.title} />
                </Card>
            </AppLink>
        );
    }
);
