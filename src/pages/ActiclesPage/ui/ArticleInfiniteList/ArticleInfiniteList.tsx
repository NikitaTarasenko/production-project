import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { ArticleList } from '@/entities/Article';
import {
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '@/pages/ActiclesPage/model/selectors/articlesPageSelector';
import { getArticles } from '@/pages/ActiclesPage/model/slice/articlesPageSlice';
import { Text, TextSize } from '@/shared/ui/Text/Text';

interface ArticleInfiniteListProps {
    className?: string;
}
export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const isLoading = useSelector(getArticlesPageIsLoading);
    const articles = useSelector(getArticles.selectAll);
    const view = useSelector(getArticlesPageView);

    if (!isLoading && !articles.length) {
        return (
            <div style={{ marginTop: '30px' }}>
                <Text size={TextSize.L} title={t('Articles not found')} />
            </div>
        );
    }

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={className}
        />
    );
});
