import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { ITest } from "../../types/ITest";

type CreateTestProps = ITest;

export const createTest = createAsyncThunk<
    { success: boolean },
    CreateTestProps,
    ThunkConfig<string>
>("test/createTest", async (responseData, { extra, rejectWithValue }) => {
    try {
        const response = await extra.api.post<{ success: boolean }>("/create-test", responseData);

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue("error");
    }
});
