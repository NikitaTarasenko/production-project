import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RatingCard.module.scss';
import { Card } from '@/shared/ui/Card/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Text } from '@/shared/ui/Text/Text';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingCardProps {
  className?: string;
  title? : string;
feedbackTitle?: string;
hasFeedback?: boolean;
onCancel?: (starsCount: number)=> void;
onAccept?: (starsCount: number, feedback?: string)=> void;
}
export const RatingCard = memo((props : RatingCardProps) => {
    const {
        className, title, feedbackTitle, hasFeedback, onCancel, onAccept,
    } = props;
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [starsCount, setStarsCount] = useState(0);

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
        setIsModalOpen(true);
    }, [hasFeedback, onAccept]);

    const acceptHandler = useCallback(() => {
        onAccept?.(starsCount, feedback);
        setIsModalOpen(false);
    }, [feedback, onAccept, starsCount]);

    const onCancelHandler = useCallback(() => {
        onCancel?.(starsCount);
        setIsModalOpen(false);
    }, [onCancel, starsCount]);

    const modalContent = (
        <VStack max gap="32">
            <Text title={feedbackTitle} />
            <Input
                placeholder={t('Your feedback')}
                value={feedback}
                onChange={setFeedback}
                data-testid="RatingCard.Input"
            />
            <HStack max gap="16" justify="between">
                <Button onClick={acceptHandler} data-testid="RatingCard.Send">
                    {t('Send')}
                </Button>
                <Button onClick={onCancelHandler} theme={ThemeButton.OUTLINE_RED} data-testid="RatingCard.Close">
                    {t('Close')}
                </Button>
            </HStack>
        </VStack>
    );
    return (
        <Card className={classNames(cls.RatingCard, {}, [className])} data-testid="RatingCard">
            <VStack align="center" gap="8">
                <Text title={title} />
                <StarRating size={40} onSelect={onSelectStars} />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} onClose={onCancelHandler} lazy>
                    {modalContent}
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} onClose={onCancelHandler} lazy>
                    {modalContent}
                </Drawer>
            </MobileView>
        </Card>
    );
});
