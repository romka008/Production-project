import { StateSchema } from "app/providers/StoreProvider";
import { getProfileError } from "./getProfileError";
import { Country } from "../../../../../entities/Country";
import { Currency } from "../../../../../entities/Currency";

describe("getProfileError.test", () => {
    test("should return error", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: "Ошибка",
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual("Ошибка");
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
