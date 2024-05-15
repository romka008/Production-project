import { classNames } from "@/shared/lib/classNames/classNames";
import { Avatar } from "@/shared/ui/Avatar";
import { Text } from "@/shared/ui/Text";
import { Skeleton } from "@/shared/ui/Skeleton";
import { AppLink } from "@/shared/ui/AppLink";
import { getRouteProfile } from "@/shared/const/router";
import { Comment } from "../../";

import styles from "./CommentCard.module.scss";
import { VStack } from "@/shared/ui/Stack";

interface ICommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = ({ className, comment, isLoading }: ICommentCardProps) => {
    if (isLoading) {
        return (
            <div className={classNames(styles.commentCard, {}, [className, styles.loading])}>
                <VStack gap="8">
                    <Skeleton width={30} height={30} border={"50%"} />
                    <Skeleton width={60} height={16} />
                </VStack>
                <Skeleton className={styles.text} height={40} />
            </div>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack gap="8" max className={classNames(styles.commentCard, {}, [className])}>
            <AppLink to={getRouteProfile(comment.user.id)} className={styles.header}>
                {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
                <Text title={comment.user.username} />
            </AppLink>
            <Text className={styles.text} text={comment.text} />
        </VStack>
    );
};
