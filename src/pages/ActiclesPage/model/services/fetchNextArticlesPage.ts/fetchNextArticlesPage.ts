import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import {
    getArticlesPageHasMore, getArticlesPageIsLoading, getArticlesPageLimit, getArticlesPageNumber,
} from '../../selectors/articlesPageSelector';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

// First, create the thunk
interface FetchedArticlesListProps{
    page?: number;
}

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/fetchNextArticlesPage',
    async (_, { getState, dispatch }) => {
        const hasMore = getArticlesPageHasMore(getState());
        const limit = getArticlesPageLimit(getState());
        const isLoading = getArticlesPageIsLoading(getState());
        const page = getArticlesPageNumber(getState());

        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(page + 1));
            dispatch(fetchArticlesList({

                limit,
            }));
        }
    },
);
