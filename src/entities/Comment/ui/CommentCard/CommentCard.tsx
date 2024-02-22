import { classNames } from "shared/lib/classNames/classNames";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Text } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Sceleton/Skeleton";
import { Comment } from "../../";

import styles from "./CommentCard.module.scss";

interface ICommentCardProps {
    className?: string;
    comment: Comment;
    isLoading?: boolean;
}

export const CommentCard = ({ className, comment, isLoading }: ICommentCardProps) => {
    if (isLoading) {
        return (
            <div className={classNames(styles.commentCard, {}, [className])}>
                <div className={styles.header}>
                    <Skeleton width={30} height={30} border={"50%"} />
                    <Skeleton width={60} height={16} />
                </div>
                <Skeleton className={styles.text} height={40} />
            </div>
        );
    }

    return (
        <div className={classNames(styles.commentCard, {}, [className])}>
            <div className={styles.header}>
                {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
                <Text title={comment.user.username} />
            </div>
            <Text className={styles.text} text={comment.text} />
        </div>
    );
};
