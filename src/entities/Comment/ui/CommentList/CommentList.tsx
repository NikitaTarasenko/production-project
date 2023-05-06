import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
}
export const CommentList = ({ className }: CommentListProps) => (
    <div className={classNames(cls.CommentList, {}, [className])}>
        c l
    </div>
);
