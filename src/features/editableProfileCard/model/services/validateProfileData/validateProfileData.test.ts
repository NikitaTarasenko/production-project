import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';

jest.mock('axios');

const data = {
    username: 'admin',
    age: 26,
    country: Country.Ukraine,
    lastName: 'Tareas',
    first: 'Nikita',
    city: 'asdasd',
    currency: Currency.USD,

};

describe('fetchProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('no name and lastName', async () => {
        const result = validateProfileData({ ...data, first: '', lastName: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('no city', async () => {
        const result = validateProfileData({ ...data, city: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_CITY]);
    });

    test('no age', async () => {
        const result = validateProfileData({ ...data, age: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('nothing', async () => {
        const result = validateProfileData({ });
        expect(result).toEqual(
            [ValidateProfileError.INCORRECT_USER_DATA, ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_CITY],
        );
    });
});
