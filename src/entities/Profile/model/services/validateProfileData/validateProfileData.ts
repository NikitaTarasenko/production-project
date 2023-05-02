import { Profile, ValidateProfileError } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }
    const {
        first, lastName, age, city,
    } = profile;

    const errors: ValidateProfileError[] = [];

    if ((!first || !lastName) || ((first?.trim() === '') || (lastName?.trim() === ''))) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }
    if (city?.trim() === '' || !city) {
        errors.push(ValidateProfileError.INCORRECT_CITY);
    }

    return errors;
};
