import { LoginSchema } from "../types/loginSchema";
import { loginActions, loginReducer } from "./loginSlice";

describe("loginSlice.test", () => {
    test("test set username", () => {
        const state: DeepPartial<LoginSchema> = { username: "admin" };

        expect(loginReducer(state as LoginSchema, loginActions.setUsername("admin"))).toStrictEqual(
            {
                username: "admin",
            }
        );
    });
    test("test set password", () => {
        const state: DeepPartial<LoginSchema> = { password: "admin" };

        expect(loginReducer(state as LoginSchema, loginActions.setPassword("admin"))).toStrictEqual(
            {
                password: "admin",
            }
        );
    });
});
