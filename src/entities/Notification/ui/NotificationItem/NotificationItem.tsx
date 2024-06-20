import { memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Card as CardDeprecated, CardTheme } from "@/shared/ui/deprecated/Card";
import { Text as TextDeprecated } from "@/shared/ui/deprecated/Text";
import { ToggleFeatures } from "@/shared/lib/features";
import { Card } from "@/shared/ui/redesigned/Card";
import { Text } from "@/shared/ui/redesigned/Text";
import { INotification } from "../../model/types/notification";

import styles from "./NotificationItem.module.scss";

interface INotificationItemProps {
    className?: string;
    item: INotification;
}

export const NotificationItem = memo(({ className, item }: INotificationItemProps) => {
    const { t } = useTranslation();

    const content = (
        <ToggleFeatures
            name="isAppRedesigned"
            on={
                <Card
                    variant="outlined"
                    className={classNames(styles.notificationItem, {}, [className])}
                >
                    <Text title={item.description} text={item.description} />
                </Card>
            }
            off={
                <CardDeprecated
                    theme={CardTheme.OUTLINED}
                    className={classNames(styles.notificationItem, {}, [className])}
                >
                    <TextDeprecated title={item.description} text={item.description} />
                </CardDeprecated>
            }
        />
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
