import { LoginModal } from 'features/AuthByUserName';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}
export const NavBar = ({ className }: NavBarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);
    return (
        <div className={classNames(cls.NavBar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Log in')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </div>
    );
};
