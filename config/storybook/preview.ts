import type { Preview } from "@storybook/react";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "./../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RouterDecorator } from "./../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import { Theme } from "../../src/shared/const/theme";

const preview: Preview = {
    decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator],
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export default preview;
