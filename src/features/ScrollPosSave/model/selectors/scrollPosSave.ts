import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

export const getScrollPosSaveScroll = (state: StateSchema) => state.scrollPosSave.scroll;
export const getScrollPosSaveScrollByPath = createSelector(
    getScrollPosSaveScroll,
    (state:StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,

);
