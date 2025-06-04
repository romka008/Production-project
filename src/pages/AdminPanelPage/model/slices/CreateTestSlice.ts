import { createSlice } from "@reduxjs/toolkit";
import { AdminPanelPageSchema } from "../types/AdminPanelPageSchema";
import { createTest } from "../services/createTest/createTest";

const initialState: AdminPanelPageSchema = {
    isLoading: false,
};

export const CreateTestSlice = createSlice({
    name: "AdminPanelPage",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(createTest.pending, state => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(createTest.fulfilled, state => {
                state.isLoading = false;
            })
            .addCase(createTest.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: AdminPanelPageActions } = CreateTestSlice;
export const { reducer: AdminPanelPageReducer } = CreateTestSlice;
