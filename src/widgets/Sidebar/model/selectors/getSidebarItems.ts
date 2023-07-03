import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';

import Main from '@/shared/assets/icons/home.svg';
import About from '@/shared/assets/icons/list.svg';
import Profile from '@/shared/assets/icons/profile.svg';
import Articles from '@/shared/assets/icons/artic_det.svg';
import { SidebarItemType } from '../types/SidebarItemType';
import {
    getRouteMain, getRouteAbout, getRouteProfile, getRouteArticles,
} from '@/shared/const/router';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemList: SidebarItemType[] = [
            {
                path: getRouteMain(),
                Icon: Main,
                text: 'Main page',
            },
            {
                path: getRouteAbout(),
                Icon: About,
                text: 'About page',
            },
        ];

        if (userData) {
            sidebarItemList.push(
                {
                    path: getRouteProfile(userData.id),
                    Icon: Profile,
                    text: 'ProfilePage',
                    authOnly: true,
                },

                {
                    path: getRouteArticles(),
                    Icon: Articles,
                    text: 'Articles',
                    authOnly: true,
                },
            );
        }
        return sidebarItemList;
    },

);
