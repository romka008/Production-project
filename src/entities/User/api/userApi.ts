import { rtkApi } from "@/shared/api/rtkApi";
import { IJsonSettings } from "../model/types/jsonSettings";
import { User } from "../model/types/userSchema";

interface ISetJsonSettings {
    userId: string;
    jsonSettings: IJsonSettings;
}

const userApi = rtkApi.injectEndpoints({
    endpoints: build => ({
        setJsonSettings: build.mutation<User, ISetJsonSettings>({
            query: ({ userId, jsonSettings }) => ({
                url: "/users/" + userId,
                method: "PATCH",
                body: { jsonSettings },
            }),
        }),
    }),
});

export const setUserJsonSettings = userApi.endpoints.setJsonSettings.initiate;
