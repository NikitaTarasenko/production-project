import { classNames } from 'shared/lib/classNames/classNames';

import { memo, useCallback, useEffect } from 'react';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDIspatch/useAppDispatch';
import { AddCommentForm } from 'features/addCommentForm';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { PageWrapper } from 'widgets/PageWrapper';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slices';
import { getArticleComments } from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentSlice';
import { getArticleCommentsIsLoading } from 'pages/ArticleDetailsPage/model/selectors/comments';
import { getArticleDetailsRecommendationIsLoading } from 'pages/ArticleDetailsPage/model/selectors/recommendations';
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import {
    fetchArticlesRecommendations,
} from 'pages/ArticleDetailsPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId';
import { getRecommendation } from 'pages/ArticleDetailsPage/model/slices/articleDetailsRecommendationSlice';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};
const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { id } = useParams<{id:string}>();
    const { t } = useTranslation('');
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);
    // const error = useSelector(getArticleCommentsError);
    const recommendations = useSelector(getRecommendation.selectAll);
    const recommendtaionsIsLoading = useSelector(getArticleDetailsRecommendationIsLoading);

    useEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticlesRecommendations());
    }, [dispatch, id]);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);
    if (!id) {
        return (
            <PageWrapper className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                { t('Article not found')}
            </PageWrapper>
        );
    }
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <PageWrapper className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <Text size={TextSize.L} className={cls.recommend} title={t('Recommendations')} />
                <ArticleList
                    // eslint-disable-next-line i18next/no-literal-string
                    target="_blank"
                    className={cls.recommends}
                    articles={recommendations}
                    isLoading={recommendtaionsIsLoading}
                />
                <Text size={TextSize.L} className={cls.commentTitle} title={t('Comments')} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={isLoading}
                    comments={comments}
                />
            </PageWrapper>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
