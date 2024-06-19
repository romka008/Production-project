import { setFeatureFlags } from "@/shared/lib/features";
import { getAllFeaturesFlags } from "@/shared/lib/features/setGetFeatures";
import { IFeatureFlags } from "@/shared/types/featureFlags";
import { Decorator } from "@storybook/react/*";

export const NewDesignDecorator = (featureFlags: IFeatureFlags): Decorator => {
    return Story => {
        setFeatureFlags({ ...getAllFeaturesFlags, ...featureFlags });
        return (
            <div className="app-redesigned">
                <Story />
            </div>
        );
    };
};
