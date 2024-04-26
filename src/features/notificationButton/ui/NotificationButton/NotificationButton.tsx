import { memo } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { Popover } from "shared/ui/Popups";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";
import Notifications from "widgets/assets/icons/notifications.svg";
import { NotificationList } from "../../../../entities/Notification";

import styles from "./NotificationButton.module.scss";

interface INotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo(({ className }: INotificationButtonProps) => {
    return (
        <Popover
            className={classNames(styles.notificationButton, {}, [className])}
            direction="bottom left"
            trigger={
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon Svg={Notifications} inverted />
                </Button>
            }
        >
            <NotificationList className={styles.notifications} />
        </Popover>
    );
});
