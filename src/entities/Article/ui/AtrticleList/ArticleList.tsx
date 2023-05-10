import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Article, ArticleView } from 'entities/Article/model/types/article';
import cls from './ArticleList.module.scss';
import { AtrticleListItem } from '../AtrticleListItem/AtrticleListItem';
import { AtrticleListSkeleton } from '../AtrticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view? : ArticleView;
}

const getSkeletons = (view: ArticleView) => (

    new Array(view === ArticleView.SMALL ? 10 : 3).fill(0).map((item, index) => (
        <AtrticleListSkeleton className={cls.card} key={index} view={view} />))

);

export const ArticleList = memo((props : ArticleListProps) => {
    const {
        className, isLoading, view = ArticleView.SMALL, articles,
    } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                {getSkeletons(view)}
            </div>
        );
    }
    const renderArticle = (article: Article) => (
        <AtrticleListItem
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
        </div>
    );
});
