import { StateSchema } from "app/providers/StoreProvider";
import { getLoginPassword } from "./getLoginPassword";

describe("getLoginPassword.test", () => {
    test("should return password", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: "Пароль",
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual("Пароль");
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual("");
    });
});
