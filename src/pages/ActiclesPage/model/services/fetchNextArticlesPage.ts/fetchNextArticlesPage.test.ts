import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { ArticleView } from 'entities/Article';
import { ArticleSortField, ArticleType } from 'entities/Article/model/types/article';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 1,
                ids: [],
                entities: {},
                limit: 10,
                view: ArticleView.SMALL,
                isLoading: false,
                hasMore: true,
                _inited: false,
                sort: ArticleSortField.CREATED,
                search: '',
                order: 'asc',
                type: ArticleType.ALL,
            },
        });

        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(4);
        // expect(fetchArticlesList).toHaveBeenCalledWith({ page: 2 });
    });

    test('fetchArticlesList is not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                view: ArticleView.SMALL,
                isLoading: false,
                hasMore: false,
                _inited: false,
                sort: ArticleSortField.CREATED,
                search: '',
                order: 'asc',
                type: ArticleType.ALL,
            },
        });

        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });

    test('fetchArticlesList is not loading', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                view: ArticleView.SMALL,
                isLoading: true,
                hasMore: true,
                _inited: false,
                sort: ArticleSortField.CREATED,
                search: '',
                order: 'asc',
                type: ArticleType.ALL,
            },
        });

        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
