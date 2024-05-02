import { memo, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import {
    DynamicModuleLoader,
    ReducerList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Text, TextAlign, TextSize } from "@/shared/ui/Text/Text";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Icon } from "@/shared/ui/Icon/Icon";
import { classNames } from "@/shared/lib/classNames/classNames";
import EyeIcon from "@/widgets/assets/icons/eye-20-20.svg";
import CalendarIcon from "@/widgets/assets/icons/calendar-20-20.svg";

import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from "../../model/selectors/ArticleDetails";
import { ArticleBlock } from "../../../Article/model/types/article";
import { ArticleBlockType } from "../../model/consts/articleConstst";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";

import styles from "./ArticleDetails.module.scss";
import { HStack, VStack } from "@/shared/ui/Stack";

interface IArticleDetailsProps {
    id: string;
    className?: string;
}

const initialReducers: ReducerList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: IArticleDetailsProps) => {
    const { t } = useTranslation("article");
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    className={styles.block}
                    block={block}
                    key={block.id}
                />
            );
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    className={styles.block}
                    block={block}
                    key={block.id}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    className={styles.block}
                    block={block}
                    key={block.id}
                />
            );

        default:
            return null;
        }
    }, []);

    useEffect(() => {
        if (__PROJECT__ !== "storybook") {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <VStack gap="16" max>
                <Skeleton width={200} height={200} border="50%" className={styles.avatar} />
                <Skeleton width={600} height={31} className={styles.title} />
                <Skeleton width={300} height={31} className={styles.skeleton} />
                <Skeleton width="100%" height={230} className={styles.skeleton} />
                <Skeleton width="100%" height={230} className={styles.skeleton} />
            </VStack>
        );
    } else if (error) {
        content = (
            <Text align={TextAlign.CENTER} title={t("Произошла ошибка при загрузке статьи")} />
        );
    } else {
        content = (
            <>
                <HStack justify="center" max>
                    <Avatar size={200} src={article?.img} className={styles.avatar} />
                </HStack>
                <VStack gap="4">
                    <Text title={article?.title} text={article?.subtitle} size={TextSize.L} />
                    <HStack gap="8">
                        <Icon Svg={EyeIcon} className={styles.icon} />
                        <Text text={String(article?.views)} />
                    </HStack>
                    <HStack gap="8">
                        <Icon Svg={CalendarIcon} className={styles.icon} />
                        <Text text={article?.createdAt} />
                    </HStack>
                </VStack>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <VStack gap="16" max className={classNames(styles.articleDetails, {}, [className])}>
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
