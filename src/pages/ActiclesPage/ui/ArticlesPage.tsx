/* eslint-disable max-len */
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import {
    Article, ArticleList, ArticleView, ArticleViewSelector,
} from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDIspatch/useAppDispatch';
import { useSelector } from 'react-redux';
import cls from './ArticlesPage.module.scss';
import { articlesPageReducer, getArticles, articlesPageActions } from '../model/slice/articlesPageSlice';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '../model/selectors/articlesPageSelector';

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
    const error = useSelector(getArticlesPageError);

    useEffect(() => {
        dispatch(fetchArticlesList());
        dispatch(articlesPageActions.initState());
    }, [dispatch]);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ActiclesPage, {}, [className])}>
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
