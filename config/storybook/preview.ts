import type { Preview } from "@storybook/react-vite";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "./../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RouterDecorator } from "./../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import { NewDesignDecorator } from "./../../src/shared/config/storybook/NewDesignDecorator/NewDesignDecorator";
import { Theme } from "../../src/shared/const/theme";

const preview: Preview = {
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
        NewDesignDecorator({}),
    ],
    parameters: {
        // actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },

    tags: ["autodocs"],
};

export default preview;
