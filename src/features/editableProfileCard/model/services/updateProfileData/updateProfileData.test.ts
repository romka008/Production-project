import { updateProfileData } from "./updateProfileData";
import { TestAsyncThunk } from "@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { ValidateProfileError } from "../../consts/consts";

const data = {
    age: 21,
    first: "Ivan",
    lastname: "Ivanov",
    username: "admin",
    city: "Moscow",
    country: Country.Russia,
    currency: Currency.RUB,
};

describe("updateProfileData.test", () => {
    test("success", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });

    test("success error", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockRejectedValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    test("validate error", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, lastname: "" },
            },
        });
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
});
