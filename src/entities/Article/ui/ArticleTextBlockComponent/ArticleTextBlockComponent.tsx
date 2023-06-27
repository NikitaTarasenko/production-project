import { classNames } from '@/shared/lib/classNames/classNames';

import { memo } from 'react';
import { ArticleTextBlock } from '@/entities/Article/model/types/article';
import { Text } from '@/shared/ui/Text/Text';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}
export const ArticleTextBlockComponent = memo(({ className, block }: ArticleTextBlockComponentProps) => (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
        {block.title && (
            <Text
                title={block.title}
                className={cls.title}
            />
        )}
        {block.paragraphs.map((paragraph) => <Text key={paragraph} text={paragraph} className={cls.paragraph} />)}
    </div>
));
