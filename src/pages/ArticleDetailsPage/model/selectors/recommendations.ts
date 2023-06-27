import { StateSchema } from '@/app/providers/StoreProvider';

// eslint-disable-next-line max-len
export const getArticleDetailsRecommendationIsLoading = (state:StateSchema) => state.articleDetailsPage?.recommendations.isLoading;
export const getArticleDetailsRecommendationError = (state:StateSchema) => state.articleDetailsPage?.recommendations.error;
