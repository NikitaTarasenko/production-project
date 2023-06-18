import {
    AnyAction, CombinedState, Dispatch, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUserName';
import { ScrollPosSaveSchema } from 'features/ScrollPosSave';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { ProfileSchema } from 'features/editableProfileCard';
import { ArticlesPageSchema } from 'pages/ActiclesPage';
import { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage';
import { rtkApi } from 'shared/api/rtkApi';

export interface StateSchema{
    counter : CounterSchema;
    user: UserSchema;
    scrollPosSave: ScrollPosSaveSchema;
    [rtkApi.reducerPath] : ReturnType<typeof rtkApi.reducer>;
    // Async reducers
    loginForm?: LoginSchema;
    profile? : ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    // articleDetailsComments?: ArticleDetailsCommentsSchema;
    // articleDetailsRecommendation?: ArticleDetailsRecommendationSchema;
    addCommentForm?: AddCommentFormSchema;
    articlesPage?: ArticlesPageSchema;
    articleDetailsPage? : ArticleDetailsPageSchema;

}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>
export interface ReducerManager{
    getReducerMap: ()=> ReducersMapObject<StateSchema>;
    reduce: (state : StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey)=> void;
    // true - mounted, false - removed
    getMountedReducers:()=> MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArgs{
    api: AxiosInstance,

}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArgs;
    dispatch?: Dispatch;
    state: StateSchema;
}
