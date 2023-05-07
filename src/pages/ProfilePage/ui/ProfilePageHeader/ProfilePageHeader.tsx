import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDIspatch/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}
export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Profile')} />
            { readonly
                ? (
                    <Button className={cls.editBtn} theme={ThemeButton.OUTLINE} onClick={onEdit}>
                        {t('Edit')}
                    </Button>
                )
                : (
                    <>
                        <Button className={cls.editBtn} theme={ThemeButton.OUTLINE_RED} onClick={onCancelEdit}>
                            {t('Cancel')}
                        </Button>
                        <Button className={cls.saveBtn} theme={ThemeButton.OUTLINE} onClick={onSave}>
                            {t('Save')}
                        </Button>
                    </>

                )}
        </div>
    );
};