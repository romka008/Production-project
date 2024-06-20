import { memo, useState, useCallback } from "react";
import { BrowserView, MobileView } from "react-device-detect";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Popover as PopoverDeprecated } from "@/shared/ui/deprecated/Popups";
import { Button as ButtonDeprecated, ButtonTheme } from "@/shared/ui/deprecated/Button";
import { Icon as IconDeprecated } from "@/shared/ui/deprecated/Icon";
import { Drawer } from "@/shared/ui/deprecated/Drawer";
import NotificationsIconDeprecated from "@/shared/assets/icons/notifications.svg";
import NotificationsIcon from "@/shared/assets/icons/Notification.svg";
import { ToggleFeatures } from "@/shared/lib/features";
import { Icon } from "@/shared/ui/redesigned/Icon";
import { Button } from "@/shared/ui/redesigned/Button";
import { Popover } from "@/shared/ui/redesigned/Popups";
import { NotificationList } from "@/entities/Notification";

import styles from "./NotificationButton.module.scss";

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
        <ToggleFeatures
            name="isAppRedesigned"
            on={
                <Button variant="clear">
                    <Icon Svg={NotificationsIcon} clickable onClick={onOpenDrawer} />
                </Button>
            }
            off={
                <ButtonDeprecated theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
                    <IconDeprecated Svg={NotificationsIconDeprecated} inverted />
                </ButtonDeprecated>
            }
        />
    );

    return (
        <div>
            <BrowserView>
                <ToggleFeatures
                    name="isAppRedesigned"
                    on={
                        <Popover
                            className={classNames(styles.notificationButton, {}, [className])}
                            direction="bottom left"
                            trigger={trigger}
                        >
                            <NotificationList className={styles.notifications} />
                        </Popover>
                    }
                    off={
                        <PopoverDeprecated
                            className={classNames(styles.notificationButton, {}, [className])}
                            direction="bottom left"
                            trigger={trigger}
                        >
                            <NotificationList className={styles.notifications} />
                        </PopoverDeprecated>
                    }
                />
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
