import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { LoginModal } from '@/features/AuthByUserName';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import {
    getRouteAdmin, getRouteArticleCreate, getRouteProfile,
} from '@/shared/const/router';

import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { HStack } from '@/shared/ui/Stack';

import { Dropdown } from '@/shared/ui/Popups';
import { NotificationButton } from '@/features/notificationButton';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}
export const NavBar = memo(({ className }: NavBarProps) => {
    const { t } = useTranslation('');
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const isAdminPanelAvailable = isAdmin || isManager;

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <header className={classNames(cls.NavBar, {}, [className])}>
                <Text
                    className={cls.appName}
                    theme={TextTheme.PRIMARY_INVERTED}
                    title={t('N.Tarasenko App')}
                />
                <AppLink
                    className={cls.createBtn}
                    to={getRouteArticleCreate()}
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('Create new article')}
                </AppLink>
                <HStack gap="16" className={cls.actions}>
                    <NotificationButton />
                    <Dropdown
                        direction="bottom left"
                        className={cls.dropdown}
                        items={[
                            ...(isAdminPanelAvailable ? [{
                                content: t('AdminPl'),
                                href: getRouteAdmin(),
                            }] : []),
                            {
                                content: t('Profile'),
                                href: getRouteProfile(authData.id),
                            },
                            {
                                content: t('Log out'),
                                onClick: onLogout,
                            },
                        ]}
                        trigger={<Avatar size={35} src={authData.avatar} />}
                    />
                </HStack>

            </header>
        );
    }
    return (
        <header className={classNames(cls.NavBar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Log in')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            { isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
        </header>
    );
});
