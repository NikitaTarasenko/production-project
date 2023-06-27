import { classNames } from '@/shared/lib/classNames/classNames';
import { Comment } from '@/entities/Comment/model/types/comment';
import { Text } from '@/shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { VStack } from '@/shared/ui/Stack';
import cls from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}
export const CommentList = ({ className, comments, isLoading }: CommentListProps) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentCard
                    isLoading
                />
                <CommentCard
                    isLoading
                />
                <CommentCard
                    isLoading
                />
            </div>
        );
    }

    return (
        <VStack gap="8" className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        isLoading={isLoading}
                        className={cls.comment}
                        key={comment.id}
                        comment={comment}
                    />
                ))
                : <VStack gap="8"><Text text={t('No comments')} /></VStack>}
        </VStack>
    );
};
