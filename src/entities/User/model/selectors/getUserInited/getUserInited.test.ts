import { StateSchema } from "app/providers/StoreProvider";
import { getUserInited } from "./getUserInited";

describe("getUserInited.test", () => {
    test("should return user inited", () => {
        const inited = false;
        const state: DeepPartial<StateSchema> = {
            user: { _inited: inited },
        };
        expect(getUserInited(state as StateSchema)).toEqual(inited);
    });
});
