/* eslint-disable max-len */
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import {
    ArticleList, ArticleView, ArticleViewSelector,
} from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDIspatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { PageWrapper } from 'widgets/PageWrapper';
import { useSearchParams } from 'react-router-dom';
import { Text, TextSize } from 'shared/ui/Text/Text';
import cls from './ArticlesPage.module.scss';
import { articlesPageReducer, getArticles, articlesPageActions } from '../../model/slice/articlesPageSlice';

import {
    getArticlesPageError, getArticlesPageIsLoading, getArticlesPageNumber, getArticlesPageView,
    getArticlesPageHasMore,

} from '../../model/selectors/articlesPageSelector';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage.ts/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

interface ActiclesPageProps {
  className?: string;
}
const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ActiclesPageProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        dispatch(initArticlesPage(searchParams));
    }, [dispatch, searchParams]);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    if (!isLoading && articles.length) {
        <div className={classNames(cls.ActiclesPage, {}, [className])}>
            <Text size={TextSize.L} title={t('Articles not found')} />
        </div>;
    }
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <PageWrapper onScrollEnd={onLoadNextPart} className={classNames(cls.ActiclesPage, {}, [className])}>

                <ArticlesPageFilters />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                    className={cls.list}
                />
            </PageWrapper>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
