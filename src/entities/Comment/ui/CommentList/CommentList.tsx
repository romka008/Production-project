import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text/Text";
import { Comment } from "../../";
import { CommentCard } from "../CommentCard/CommentCard";

import styles from "./CommentList.module.scss";

interface ICommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = ({ className, comments, isLoading }: ICommentListProps) => {
    const { t } = useTranslation("comment");

    if (isLoading) {
        return (
            <div className={classNames(styles.commentList, {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        );
    }

    return (
        <div className={classNames(styles.commentList, {}, [className])}>
            {comments?.length ? (
                comments.map(comment => (
                    <CommentCard
                        className={styles.comment}
                        key={comment.id}
                        comment={comment}
                        isLoading={isLoading}
                    />
                ))
            ) : (
                <Text text={t("Комментарии отсутствуют")} />
            )}
        </div>
    );
};
