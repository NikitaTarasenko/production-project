import { getQueryParams } from './addQueryParams';

describe('shared/url/addQueryParams.test', () => {
    test('test with one param', () => {
        const params = getQueryParams({
            test: 'value1',
        });
        expect(params).toBe('?test=value1');
    });

    test('test with multiple params', () => {
        const params = getQueryParams({
            test: 'value1',
            second: '2',
        });
        expect(params).toBe('?test=value1&second=2');
    });

    test('test with undef', () => {
        const params = getQueryParams({
            test: 'value1',
            second: undefined,
        });
        expect(params).toBe('?test=value1');
    });
});
