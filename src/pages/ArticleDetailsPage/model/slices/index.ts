import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsRecommendationReducer } from './articleDetailsRecommendationSlice';
import { articleDetailsCommentsReducer } from './articleDetailsCommentSlice';

export const articleDetailsPageReducer =
    combineReducers<ArticleDetailsPageSchema>({
        recommendations: articleDetailsRecommendationReducer,
        comments: articleDetailsCommentsReducer,
    });
