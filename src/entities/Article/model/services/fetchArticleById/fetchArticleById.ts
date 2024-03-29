import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';

import { Article } from '@/entities/Article';

// First, create the thunk
export const fetchArticleById = createAsyncThunk<
    Article,
    string,
    ThunkConfig<string>
>(
    'articleDetails/fetchArticleById',
    async (articleId, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<Article>(
                `/articles/${articleId}`,
                {
                    params: {
                        _expand: 'user',
                    },
                },
            );

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
