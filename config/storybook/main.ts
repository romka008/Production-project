import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
    stories: ["../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        {
            name: "@storybook/addon-styling-webpack",
        },
        "@storybook/addon-interactions",
        "@storybook/addon-webpack5-compiler-babel",
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    docs: {},
    typescript: {
        reactDocgen: "react-docgen-typescript",
    },
};
export default config;
