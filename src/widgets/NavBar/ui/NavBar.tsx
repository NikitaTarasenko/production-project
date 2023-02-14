import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}
export const NavBar = ({ className }: NavBarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.NavBar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/">{t('Main')}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">{t('About')}</AppLink>
            </div>
        </div>
    );
};
