import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ArticleView } from 'entities/Article/model/consts/consts';
import cls from './AtrticleListItem.module.scss';

interface AtrticleListSkeletonProps {
  className?: string;

  view : ArticleView;
}
export const AtrticleListSkeleton = memo((props : AtrticleListSkeletonProps) => {
    const { className, view } = props;

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(cls.AtrticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton border="50%" width={50} height={50} />
                        <Skeleton width={150} height={16} className={cls.username} />
                        <Skeleton width={150} height={16} className={cls.createdAt} />
                    </div>
                    <Skeleton width={250} height={24} className={cls.title} />

                    <Skeleton height={300} className={cls.img} />

                    <div className={cls.footer}>
                        <Skeleton width={200} height={36} />
                    </div>

                </Card>
            </div>
        );
    }
    return (

        <div className={classNames(cls.AtrticleListItem, {}, [className, cls[view]])}>
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <Skeleton width={200} height={200} className={cls.img} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width="100%" height={16} />
                    <Skeleton width={80} height={16} className={cls.views} />
                    <Skeleton width={80} height={16} className={cls.date} />
                </div>

                <Skeleton width="100%" height={16} className={cls.title} />
            </Card>
        </div>
    );
});
