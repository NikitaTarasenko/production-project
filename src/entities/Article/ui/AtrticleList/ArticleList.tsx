import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Article } from '@/entities/Article/model/types/article';
import { ArticleView } from '@/entities/Article/model/consts/consts';
import { checkAmountOfCards } from '@/shared/lib/checkAmountOfCards/checkAmountOfCards';
import cls from './ArticleList.module.scss';
import { AtrticleListItem } from '../AtrticleListItem/AtrticleListItem';
import { AtrticleListSkeleton } from '../AtrticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view? : ArticleView;
  target? : HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) => (

    new Array(view === ArticleView.SMALL ? checkAmountOfCards() : 3).fill(0).map((item, index) => (
        <AtrticleListSkeleton className={cls.card} key={index} view={view} />))

);

export const ArticleList = memo((props : ArticleListProps) => {
    const {
        className, isLoading, view = ArticleView.SMALL, articles, target,
    } = props;
    const { t } = useTranslation();

    const renderArticle = (article: Article) => (
        <AtrticleListItem
            // eslint-disable-next-line i18next/no-literal-string
            target={target}
            article={article}
            view={view}
            key={article.id}
            className={cls.card}
        />
    );
    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {
                articles.length > 0
                    ? articles.map(renderArticle)
                    : null
            }
            {isLoading && getSkeletons(view)}
        </div>
    );
});
