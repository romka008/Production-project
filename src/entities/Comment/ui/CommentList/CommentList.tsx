import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Text } from "@/shared/ui/deprecated/Text";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { Comment } from "../../";
import { CommentCard } from "../CommentCard/CommentCard";

interface ICommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = ({ className, comments, isLoading }: ICommentListProps) => {
    const { t } = useTranslation("comment");

    if (isLoading) {
        return (
            <VStack gap="16" className={classNames("", {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </VStack>
        );
    }

    return (
        <VStack gap="16" max className={classNames("", {}, [className])}>
            {comments?.length ? (
                comments.map(comment => (
                    <CommentCard key={comment.id} comment={comment} isLoading={isLoading} />
                ))
            ) : (
                <Text text={t("Комментарии отсутствуют")} />
            )}
        </VStack>
    );
};
