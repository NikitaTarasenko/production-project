import { Article } from '@/entities/Article';
import { rtkApi } from '@/shared/api/rtkApi';

const recomendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationList: build.query<Article[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
    overrideExisting: false,
});
export const useArticleRecommendationsList =
    recomendationsApi.useGetArticleRecommendationListQuery;
