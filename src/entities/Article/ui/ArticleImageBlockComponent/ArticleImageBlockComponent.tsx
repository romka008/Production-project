import { memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Text, TextAlign } from "@/shared/ui/Text/Text";
import { ArticleImageBlock } from "../../model/types/article";

import styles from "./ArticleImageBlockComponent.module.scss";
import { VStack } from "@/shared/ui/Stack";

interface IArticleImageBlockComponentProps {
    block: ArticleImageBlock;
    className?: string;
}

export const ArticleImageBlockComponent = memo(
    ({ block, className }: IArticleImageBlockComponentProps) => {
        return (
            <VStack align="center" max className={classNames("", {}, [className])}>
                <img src={block.src} alt={block.title} className={styles.img} />
                {block.title && <Text title={block.title} align={TextAlign.CENTER} />}
            </VStack>
        );
    }
);
