import { ReactElement } from "react";

import { IFeatureFlags } from "@/shared/types/featureFlags";
import { getFeatureFlag } from "../setGetFeatures";

interface IToggleFeaturesProps {
    name: keyof IFeatureFlags;
    on: ReactElement;
    off: ReactElement;
}

export const ToggleFeatures = ({ name, on, off }: IToggleFeaturesProps) => {
    if (getFeatureFlag(name)) {
        return on;
    }

    return off;
};
