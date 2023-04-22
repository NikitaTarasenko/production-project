import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';
// import cls from './ProfilePage.module.scss';

const reducers: ReducersList = {
    profile: profileReducer,
};
interface ProfilePageProps {
  className?: string;
}
const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation();

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                {t('ProfilePage')}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
