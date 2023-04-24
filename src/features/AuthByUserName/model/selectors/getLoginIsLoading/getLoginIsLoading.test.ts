import { StateSchema } from '../../../../../app/providers/StoreProvider/config/StateSchema';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading.test  ', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });

    test('  return isLoading with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
