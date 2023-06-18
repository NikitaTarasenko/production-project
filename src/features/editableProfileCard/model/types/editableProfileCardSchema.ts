import { Profile } from 'entities/Profile/model/types/profile';

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_CITY = 'INCORRECT_CITY',
    NO_DATA='NO_DATA',
    SERVER_ERROR='SERVER_ERROR'
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading?: boolean;
    error?: string;
    readOnly?: boolean;
    validateErrors?: ValidateProfileError[];
}
