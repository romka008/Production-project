import { memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import { INotification } from "../../model/types/notification";

import styles from "./NotificationItem.module.scss";
import { Card, CardTheme } from "@/shared/ui/deprecated/Card";
import { Text } from "@/shared/ui/deprecated/Text";

interface INotificationItemProps {
    className?: string;
    item: INotification;
}

export const NotificationItem = memo(({ className, item }: INotificationItemProps) => {
    const { t } = useTranslation();

    const content = (
        <Card
            theme={CardTheme.OUTLINED}
            className={classNames(styles.notificationItem, {}, [className])}
        >
            <Text title={item.description} text={item.description} />
        </Card>
    );

    if (item.href) {
        return (
            <a className={styles.link} target="_blank" rel="noreferrer" href={item.href}>
                {content}
            </a>
        );
    }

    return content;
});
