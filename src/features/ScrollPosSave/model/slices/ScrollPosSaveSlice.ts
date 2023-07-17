import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollPosSaveSchema } from '../types/ScrollPosSaveSchema';

const initialState: ScrollPosSaveSchema = {
    scroll: {},
};

export const ScrollPosSaveSlice = createSlice({
    name: 'ScrollPosSave',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{ path: string; position: number }>,
        ) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { actions: scrollPosSaveActions } = ScrollPosSaveSlice;
export const { reducer: scrollPosSaveReducer } = ScrollPosSaveSlice;
