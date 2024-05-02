import { StateSchema } from "@/app/providers/StoreProvider";
import { getProfileFormData } from "./getProfileFormData";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";

describe("getProfileFormData.test", () => {
    test("should return profile form", () => {
        const form = {
            age: 21,
            first: "Ivan",
            lastname: "Ivanov",
            username: "admin",
            city: "Moscow",
            country: Country.Russia,
            currency: Currency.RUB,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };
        expect(getProfileFormData(state as StateSchema)).toEqual(form);
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileFormData(state as StateSchema)).toEqual(undefined);
    });
});
