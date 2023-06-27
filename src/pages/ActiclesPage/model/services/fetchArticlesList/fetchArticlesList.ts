import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article, ArticleType } from '@/entities/Article';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';
import {
    getArticlesPageLimit,
    getArticlesPageNumber,
    getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType,
} from '../../selectors/articlesPageSelector';

// First, create the thunk
interface FetchedArticlesListProps{
    limit?: number;
    replace? : boolean;
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchedArticlesListProps, ThunkConfig<string>>(
    'articlesPage/fetchArticlesList',
    async (props, { extra, rejectWithValue, getState }) => {
        const sort = getArticlesPageSort(getState());
        const order = getArticlesPageOrder(getState());
        const search = getArticlesPageSearch(getState());
        const page = getArticlesPageNumber(getState());
        const limit = getArticlesPageLimit(getState());
        const type = getArticlesPageType(getState());

        try {
            addQueryParams({
                sort, order, search, type,
            });
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    q: search,
                    type_like: type === ArticleType.ALL ? undefined : type,
                },
            });

            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
