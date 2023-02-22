import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import Main from 'shared/assets/icons/home.svg';
import About from 'shared/assets/icons/list.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed(!collapsed);
    };
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >

            <div className={cls.links}>

                <AppLink
                    className={cls.link}
                    theme={AppLinkTheme.SECONDARY}
                    to="/"
                >
                    { !collapsed ? t('Main') : <Main className={cls.icon} />}
                </AppLink>
                <AppLink
                    className={cls.link}
                    theme={AppLinkTheme.SECONDARY}
                    to="/about"
                >
                    { !collapsed ? t('About')
                        : <About className={[cls.icon, cls.icon2].join(' ')} />}
                </AppLink>

            </div>

            <Button
                className={cls.collapsedBtn}
                data-testid="sidebarToggle"
                onClick={onToggle}
                theme={ThemeButton.BACKGROUND_INVERTED}
                square
                size={SizeButton.XL}

            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher className={cls.theme} />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
