import { memo, useState, useCallback } from "react";
import { BrowserView, MobileView } from "react-device-detect";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Popover } from "@/shared/ui/Popups";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { Icon } from "@/shared/ui/Icon";
import { Drawer } from "@/shared/ui/Drawer";
import { NotificationsIcon } from "@/shared/assets";
import { NotificationList } from "@/entities/Notification";

import styles from "./NotificationButton.module.scss";
import { AnimationProvider } from "@/shared/lib/components/AnimationProvider";

interface INotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo(({ className }: INotificationButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <Button theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
            <Icon Svg={NotificationsIcon} inverted />
        </Button>
    );

    return (
        <div>
            <BrowserView>
                <Popover
                    className={classNames(styles.notificationButton, {}, [className])}
                    direction="bottom left"
                    trigger={trigger}
                >
                    <NotificationList className={styles.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </div>
    );
});
