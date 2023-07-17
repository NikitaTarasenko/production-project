import {
    PayloadAction,
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';
import { ArticleDetailsRecommendationSchema } from '../types/ArticleDetailsRecommendationSchema';
import { fetchArticlesRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';

const recommendationAdapter = createEntityAdapter<Article>({
    // Assume IDs are stored in a field other than `book.id`
    selectId: (article) => article.id,
});

export const getRecommendation =
    recommendationAdapter.getSelectors<StateSchema>(
        (state) =>
            state.articleDetailsPage?.recommendations ||
            recommendationAdapter.getInitialState(),
    );
export const articleDetailsRecommendationSlice = createSlice({
    name: 'articleDetailsPageRecommendationSlice',
    initialState:
        recommendationAdapter.getInitialState<ArticleDetailsRecommendationSchema>(
            {
                error: undefined,
                isLoading: false,
                ids: [],
                entities: {},
            },
        ),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchArticlesRecommendations.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(
            fetchArticlesRecommendations.fulfilled,
            (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false;
                recommendationAdapter.setAll(state, action.payload);
            },
        );
        builder.addCase(
            fetchArticlesRecommendations.rejected,
            (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            },
        );
    },
});

export const { reducer: articleDetailsRecommendationReducer } =
    articleDetailsRecommendationSlice;
