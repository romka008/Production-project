import { IFeatureFlags } from "../../types/featureFlags";

let featureFlags: IFeatureFlags;

export const setFeatureFlags = (newFeatureFlags?: IFeatureFlags) => {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
};

export const getFeatureFlag = (flag: keyof IFeatureFlags) => {
    return featureFlags?.[flag];
};
