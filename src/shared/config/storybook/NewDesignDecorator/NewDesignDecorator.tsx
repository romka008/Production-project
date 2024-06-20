import { Decorator } from "@storybook/react/*";
import { Theme } from "@/shared/const/theme";
import { setFeatureFlags } from "@/shared/lib/features";
import { getAllFeaturesFlags } from "@/shared/lib/features/setGetFeatures";
import { IFeatureFlags } from "@/shared/types/featureFlags";

export const NewDesignDecorator = (featureFlags: IFeatureFlags, theme?: Theme): Decorator => {
    if (!theme) {
        theme = Theme.LIGHT;
    }
    return Story => {
        setFeatureFlags({ ...getAllFeaturesFlags, ...featureFlags });
        return (
            <div className={`app_redesigned ${theme}`}>
                <Story />
            </div>
        );
    };
};
// export const NewDesignDecorator = (featureFlags: IFeatureFlags): Decorator => {
//     return Story => {
//         setFeatureFlags({ ...getAllFeaturesFlags, ...featureFlags });
//         return (
//             <div className="app-redesigned">
//                 <Story />
//             </div>
//         );
//     };
// };
