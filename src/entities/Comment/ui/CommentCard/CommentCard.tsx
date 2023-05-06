import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
}
export const CommentCard = ({ className }: CommentCardProps) => (
    <div className={classNames(cls.CommentCard, {}, [className])}>
        sad
    </div>
);
