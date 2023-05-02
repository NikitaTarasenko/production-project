import { useTranslation } from 'react-i18next';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import cls from './SideBarItem.module.scss';

interface SideBarItemProps {
    item : SidebarItemType ;
    collapsed: boolean;
}
export const SideBarItem = memo(({ item, collapsed }: SideBarItemProps) => {
    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }
    return (
        <AppLink
            className={cls.link}
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
        >
            { !collapsed ? t(item.text) : <item.Icon className={cls.icon} />}
        </AppLink>
    );
});
