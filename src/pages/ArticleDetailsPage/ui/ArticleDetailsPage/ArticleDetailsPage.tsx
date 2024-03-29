import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { PageWrapper } from '@/widgets/PageWrapper';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slices';

import { ArticleRecommendationList } from '@/features/articleRecommendationsList';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { RatingCard } from '@/entities/Rating';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};
const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('');

    if (!id) {
        return (
            <PageWrapper
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                {t('Article not found')}
            </PageWrapper>
        );
    }
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <PageWrapper
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <RatingCard
                    title={t('Did you like the article')}
                    feedbackTitle={t('Leave feedback about it')}
                    hasFeedback
                    className={cls.rating}
                />
                <ArticleRecommendationList />
                <ArticleDetailsComments id={id} />
            </PageWrapper>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
