import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { BrowserView, MobileView } from "react-device-detect";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Card } from "@/shared/ui/deprecated/Card";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import { Text } from "@/shared/ui/deprecated/Text";
import { StarRating } from "@/shared/ui/deprecated/StarRating";
import { Modal } from "@/shared/ui/deprecated/Modal";
import { Input } from "@/shared/ui/deprecated/Input";
import { Button, ButtonTheme } from "@/shared/ui/deprecated/Button";
import { Drawer } from "@/shared/ui/deprecated/Drawer";

import styles from "./Rating.module.scss";

interface IRatingProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const Rating = memo((props: IRatingProps) => {
    const { className, title, feedbackTitle, hasFeedback, onCancel, onAccept, rate = 0 } = props;
    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState("");

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept]
    );

    const handleAccept = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                data-testid="Rating.Input"
                value={feedback}
                onChange={setFeedback}
                className={styles.feedbackText}
                placeholder={t("Ваш отзыв")}
            />
        </>
    );

    return (
        <Card
            data-testid="RatingCard"
            fullWidth
            className={classNames(styles.rating, {}, [className])}
        >
            <VStack align="center" gap="8">
                <Text title={starsCount ? t("Спасибо за оценку!") : title} />
                <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                    <VStack max gap="32">
                        {modalContent}
                        <HStack max gap="16" justify="end">
                            <Button
                                data-testid="Rating.Close"
                                theme={ButtonTheme.OUTLINE_RED}
                                onClick={handleCloseModal}
                            >
                                {t("Закрыть")}
                            </Button>
                            <Button data-testid="Rating.Send" onClick={handleAccept}>
                                {t("Отправить")}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} onClose={handleCloseModal}>
                    <VStack max gap="32">
                        {modalContent}
                        <Button fullWidth onClick={handleAccept}>
                            {t("Отправить")}
                        </Button>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
});
