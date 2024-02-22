import { loginByUsername } from "./loginByUsername";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { userActions } from "../../../../../entities/User";

jest.mock("axios");

describe("loginByUsername.test", () => {
    test("success login", async () => {
        // const dispatch: Dispatch = jest.fn();
        // const getState: () => StateSchema = jest.fn();

        // mockedAxios.post.mockReturnValue(Promise.resolve({ data: { username: "123", id: "1" } }));
        // const action = loginByUsername({ username: "admin", password: "admin" });
        // const result = await action(dispatch, getState, undefined);
        // console.log(result);

        const userValue = { username: "admin", id: "1" };
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
        // mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

        const result = await thunk.callThunk({ username: "admin", password: "admin" });

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(userValue);
    });

    test("success error", async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockRejectedValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({ username: "admin", password: "admin" });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toBe("error");
    });
});
