import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { SortOrder } from '@/shared/types';
import { ArticleSortField } from '@/entities/Article';
import { checkAmountOfCards } from '@/shared/lib/checkAmountOfCards/checkAmountOfCards';
import {
    getArticlesPageInited,
    getArticlesPageLimit,

} from '../../selectors/articlesPageSelector';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (searchParams, { getState, dispatch }) => {
        const isInited = getArticlesPageInited(getState());
        // const limit = getArticlesPageLimit(getState());

        if (!isInited) {
            const orderFormUrl = searchParams.get('order') as SortOrder;
            const sortFormUrl = searchParams.get('sort') as ArticleSortField;
            const searchFormUrl = searchParams.get('search');

            if (orderFormUrl) {
                dispatch(articlesPageActions.setOrder(orderFormUrl));
            }
            if (sortFormUrl) {
                dispatch(articlesPageActions.setSort(sortFormUrl));
            }
            if (searchFormUrl) {
                dispatch(articlesPageActions.setSearch(searchFormUrl));
            }
            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({
                limit: checkAmountOfCards(),
            }));
        }
    },
);
