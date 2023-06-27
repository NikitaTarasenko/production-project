import {
    CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { NavigateOptions, To } from 'react-router-dom';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import { $api } from '@/shared/api/api';
import { scrollPosSaveReducer } from '@/features/ScrollPosSave/model/slices/ScrollPosSaveSlice';
import { rtkApi } from '@/shared/api/rtkApi';
import { StateSchema, ThunkExtraArgs } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
    initialState? : StateSchema,
    asyncReducer?: ReducersMapObject<StateSchema>,

) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducer,
        counter: counterReducer,
        user: userReducer,
        scrollPosSave: scrollPosSaveReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArgs: ThunkExtraArgs = {
        api: $api,

    };
    const store = configureStore({

        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArgs,
            },
        }).concat(rtkApi.middleware),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
