import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import Main from 'shared/assets/icons/home.svg';
import About from 'shared/assets/icons/list.svg';
import Profile from 'shared/assets/icons/profile.svg';
import Articles from 'shared/assets/icons/artic_det.svg';
import { SidebarItemType } from '../types/SidebarItemType';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemList: SidebarItemType[] = [
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
        ];

        if (userData) {
            sidebarItemList.push(
                {
                    path: RoutePath.profile + userData.id,
                    Icon: Profile,
                    text: 'ProfilePage',
                    authOnly: true,
                },

                {
                    path: RoutePath.articles,
                    Icon: Articles,
                    text: 'Articles',
                    authOnly: true,
                },
            );
        }
        return sidebarItemList;
    },

);
