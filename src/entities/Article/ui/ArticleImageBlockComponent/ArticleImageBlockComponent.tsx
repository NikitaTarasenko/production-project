import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import { ArticleImgBlock } from '@/entities/Article/model/types/article';
import { Text, TextAlign } from '@/shared/ui/Text/Text';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImgBlock
}
export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps) => (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
        <img src={block.src} className={cls.img} alt={block.title} />
        {block.title && (
            <Text text={block.title} align={TextAlign.CENTER} />
        )}
    </div>
));
