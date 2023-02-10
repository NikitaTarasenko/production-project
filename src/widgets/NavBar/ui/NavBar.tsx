import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}
export const NavBar = ({ className }: NavBarProps) => (
    <div className={classNames(cls.NavBar, {}, [className])}>

        <div className={cls.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/">Main</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">About</AppLink>
        </div>
    </div>
);
