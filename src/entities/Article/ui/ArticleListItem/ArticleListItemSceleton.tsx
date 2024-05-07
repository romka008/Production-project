import { memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Card } from "@/shared/ui/Card";
import { Skeleton } from "@/shared/ui/Skeleton";
import { ArticleView } from "../../model/consts/articleConstst";

import styles from "./ArticleListItem.module.scss";

interface IArticleListItemProps {
    className?: string;
    view?: ArticleView;
}

export const ArticleListItemSkeleton = memo(({ className, view }: IArticleListItemProps) => {
    if (view === ArticleView.LIST) {
        return (
            <div
                className={classNames(styles.articleTextBlockComponent, {}, [
                    className,
                    styles[view],
                ])}
            >
                <Card className={styles.card}>
                    <div className={styles.header}>
                        <Skeleton width={30} height={30} border="50%" className={styles.img} />
                        <Skeleton width={120} height={16} className={styles.username} />
                        <Skeleton width={100} height={16} />
                    </div>
                    <Skeleton width={250} height={24} />
                    <Skeleton height={200} className={styles.img} />
                    <div className={styles.footer}>
                        <Skeleton width={200} height={32} className={styles.img} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div
            className={classNames(styles.articleTextBlockComponent, {}, [className, styles.PLATE])}
        >
            <Card className={styles.card}>
                <div className={styles.imageWrapper}>
                    <Skeleton width={200} height={200} className={styles.img} />
                </div>
                <div className={styles.infoWrapper}>
                    <Skeleton width={130} height={16} className={styles.img} />
                    <Skeleton width={130} height={16} className={styles.img} />
                </div>
                <Skeleton width={150} height={16} className={styles.img} />
            </Card>
        </div>
    );
});
