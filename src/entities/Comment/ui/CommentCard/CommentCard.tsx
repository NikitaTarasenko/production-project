import { classNames } from '@/shared/lib/classNames/classNames';
import { Comment } from '@/entities/Comment/model/types/comment';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Text } from '@/shared/ui/Text/Text';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { getRouteProfile } from '@/shared/const/router';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading? : boolean;
}
export const CommentCard = (props : CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className, cls.isLoading])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton width={100} height={16} className={cls.username} />
                </div>
                <Skeleton width="100%" height={50} className={cls.text} />
            </div>
        );
    }
    if (!comment) {
        return null;
    }
    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={getRouteProfile(comment?.user.id)} className={cls.header}>
                {comment?.user.avatar ? <Avatar size={30} src={comment?.user.avatar} /> : null}
                <Text className={cls.username} title={comment?.user.username} />
            </AppLink>
            <Text className={cls.text} text={comment?.text} />
        </div>
    );
};
