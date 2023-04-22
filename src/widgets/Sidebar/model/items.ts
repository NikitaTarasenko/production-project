import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import Main from 'shared/assets/icons/home.svg';
import About from 'shared/assets/icons/list.svg';
import Profile from 'shared/assets/icons/profile.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

export const SidebarItemList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: Main,
        text: 'Main page',
    },
    {
        path: RoutePath.about,
        Icon: About,
        text: 'About page',
    },

    {
        path: RoutePath.profile,
        Icon: Profile,
        text: 'ProfilePage',
    },
];
