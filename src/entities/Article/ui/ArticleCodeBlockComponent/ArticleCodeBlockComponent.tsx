import { memo } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { Code } from "shared/ui/Code/Code";
import { ArcticleCodeBlock } from "../../model/types/article";

import styles from "./ArticleCodeBlockComponent.module.scss";

interface IArticleCodeBlockComponentProps {
    block: ArcticleCodeBlock;
    className?: string;
}

export const ArticleCodeBlockComponent = memo(
    ({ block, className }: IArticleCodeBlockComponentProps) => {
        return (
            <div className={classNames(styles.articleCodeBlockComponent, {}, [className])}>
                <Code text={block.code} />
            </div>
        );
    }
);
