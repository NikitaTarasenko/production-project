export { userReducer, userActions } from './model/slice/userSlice';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserMounted } from './model/selectors/getUserMounted/getUserMounted';

export { isUserAdmin, isUserManager, getUserRoles } from './model/selectors/roleSelectors';

export type {
    UserSchema,
    User,
} from './model/types/user';

export {
    UserRole,
} from './model/consts/consts';
