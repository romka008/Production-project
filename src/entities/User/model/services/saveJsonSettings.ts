import { ThunkConfig } from "@/app/providers/StoreProvider";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IJsonSettings } from "../types/jsonSettings";
import { getUserAuthData } from "../selectors/getUserAuthData/getUserAuthData";
import { getJsonSettings } from "../selectors/jsonSettings";
import { setUserJsonSettings } from "../../api/userApi";

export const saveJsonSettings = createAsyncThunk<IJsonSettings, IJsonSettings, ThunkConfig<string>>(
    "user/saveJsonSettings",
    async (newJsonSettings, { rejectWithValue, getState, dispatch }) => {
        const userData = getUserAuthData(getState());
        const currentSettings = getJsonSettings(getState());

        if (!userData) {
            return rejectWithValue("");
        }

        try {
            const response = await dispatch(
                setUserJsonSettings({
                    userId: userData.id,
                    jsonSettings: { ...currentSettings, ...newJsonSettings },
                })
            ).unwrap();

            if (!response.jsonSettings) {
                return rejectWithValue("");
            }

            return response.jsonSettings;
        } catch (e) {
            console.log(e);
            return rejectWithValue("error");
        }
    }
);
