import { IFeatureFlags } from "@/shared/types/featureFlags";
import { UserRole } from "../consts/userConsts";
import { IJsonSettings } from "./jsonSettings";

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
    features?: IFeatureFlags;
    jsonSettings?: IJsonSettings;
}

export interface UserSchema {
    authData?: User;

    _inited: boolean;
}
