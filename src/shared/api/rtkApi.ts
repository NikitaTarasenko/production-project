import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';

// Define a service using a base URL and expected endpoints
export const rtkApi = createApi({
    reducerPath: 'rtkApi',
    baseQuery: fetchBaseQuery({
        baseUrl: __API__,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem(USER_LOCAL_STORAGE_KEY) || 'app_dark_theme';
            if (token) {
                headers.set('Authorization', token);
            }
            return headers;
        },

    }),
    endpoints: (builder) => ({}),
});
