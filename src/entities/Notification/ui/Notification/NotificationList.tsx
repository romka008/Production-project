import { memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import { VStack } from "@/shared/ui/deprecated/Stack";
import { Skeleton } from "@/shared/ui/deprecated/Skeleton";
import { useGetNotificationsQuery } from "../../api/notificationApi";
import { NotificationItem } from "../NotificationItem/NotificationItem";

import styles from "./NotificationList.module.scss";

interface INotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: INotificationListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { data, isLoading } = useGetNotificationsQuery(null, { pollingInterval: 5000 });

    if (isLoading) {
        return (
            <VStack gap="16" className={classNames(styles.notificationList, {}, [className])}>
                <Skeleton width="100%" height={88} />
                <Skeleton width="100%" height={88} />
                <Skeleton width="100%" height={88} />
                <Skeleton width="100%" height={88} />
            </VStack>
        );
    }

    return (
        <VStack gap="16" className={classNames(styles.notificationList, {}, [className])}>
            {data?.map(item => <NotificationItem key={item.id} item={item} />)}
        </VStack>
    );
});
