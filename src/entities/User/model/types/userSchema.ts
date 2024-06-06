import { IFeatureFlags } from "@/shared/types/featureFlags";
import { UserRole } from "../consts/userConsts";

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
    features?: IFeatureFlags;
}

export interface UserSchema {
    authData?: User;

    _inited: boolean;
}
