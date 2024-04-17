import { ProfileSchema, ValidateProfileError } from "../types/editableProfileCardSchema";
import { profileActions, profileReducer } from "./profileSlice";
import { Currency } from "../../../../entities/Currency";
import { Country } from "../../../../entities/Country";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";

const data = {
    age: 21,
    first: "Ivan",
    lastname: "Ivanov",
    username: "admin",
    city: "Moscow",
    country: Country.Russia,
    currency: Currency.RUB,
};

describe("profileSlice.test", () => {
    test("test set readonly", () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };

        expect(profileReducer(state as ProfileSchema, profileActions.setReadOnly(true))).toEqual({
            readonly: true,
        });
    });

    test("test cancel edit", () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: "" } };

        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test("test update profile", () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: "221" } };

        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({ username: "221" })
            )
        ).toEqual({
            form: { username: "221" },
        });
    });

    test("test update profile service pending", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };

        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
            isLoading: true,
            validateError: undefined,
        });
    });

    test("test update profile service fulfilled", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };

        expect(
            profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ""))
        ).toEqual({
            data: data,
            form: data,
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
        });
    });
});
