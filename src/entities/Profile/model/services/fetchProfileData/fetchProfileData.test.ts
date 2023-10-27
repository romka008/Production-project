import { fetchProfileData } from "./fetchProfileData";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Country } from "../../../../../entities/Country";
import { Currency } from "../../../../../entities/Currency";

const data = {
    age: 21,
    first: "Ivan",
    lastname: "Ivanov",
    username: "admin",
    city: "Moscow",
    country: Country.Russia,
    currency: Currency.RUB,
};

describe("fetchProfileData.test", () => {
    test("success", async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });

    test("success error", async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockRejectedValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe("rejected");
    });
});
