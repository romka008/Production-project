import { memo } from "react";

import { Text } from "@/shared/ui/deprecated/Text";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ArticleTextBlock } from "../../model/types/article";

import styles from "./ArticleTextBlockComponent.module.scss";

interface IArticleTextBlockComponentProps {
    block: ArticleTextBlock;
    className?: string;
}

export const ArticleTextBlockComponent = memo(
    ({ block, className }: IArticleTextBlockComponentProps) => {
        return (
            <div className={classNames(styles.articleTextBlockComponent, {}, [className])}>
                {block.title && <Text className={styles.title} title={block.title} />}
                {block.paragraphs.map(paragraph => (
                    <Text key={paragraph} text={paragraph} className={styles.paragraph} />
                ))}
            </div>
        );
    }
);
