import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import type {
    StateSchema,
    ReduxStoreWithManager,
    ThunkExtraArgs,
    ThunkConfig,
} from './config/StateSchema';

export { StoreProvider, createReduxStore };

export type {
    ReduxStoreWithManager,
    StateSchema,
    AppDispatch,
    ThunkExtraArgs,
    ThunkConfig,
};
