import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ScrollSaveSchema } from "../type/ScrollSaveSchema";

const initialState: ScrollSaveSchema = {
    scroll: {},
};

export const scrollSaveSlice = createSlice({
    name: "scrollSave",
    initialState,
    reducers: {
        setScrollPosition: (state, action: PayloadAction<{ path: string; position: number }>) => {
            state.scroll[action.payload.path] = action.payload.position;
        },
    },
    // extraReducers: builder => {
    // builder
    // .addCase(loginByUsername.pending, state => {
    //     state.error = undefined;
    //     state.isLoading = true;
    // })
    // .addCase(loginByUsername.fulfilled, (state, action) => {
    //     state.isLoading = false;
    // })
    // .addCase(loginByUsername.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    // });
    // },
});

// Action creators are generated for each case reducer function
export const { actions: scrollSaveActions } = scrollSaveSlice;
export const { reducer: scrollSaveReducer } = scrollSaveSlice;
