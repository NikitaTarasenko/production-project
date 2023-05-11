import {
    PayloadAction,
    createEntityAdapter,
    createSlice,

} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';

import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

const articlesAdapter = createEntityAdapter<Article>({
    // Assume IDs are stored in a field other than `book.id`
    selectId: (article) => article.id,

});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
);
const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        ids: [],
        entities: {},
        error: undefined,
        isLoading: false,
        view: ArticleView.SMALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        initState: (state) => {
            state.view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticlesList.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(
            fetchArticlesList.fulfilled,
            (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false;
                articlesAdapter.setAll(state, action.payload);
            },
        );
        builder.addCase(fetchArticlesList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },

});

export const { reducer: articlesPageReducer } = articlesPageSlice;
export const { actions: articlesPageActions } = articlesPageSlice;
