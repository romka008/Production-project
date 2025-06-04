module.exports = (layer, componentName) => `import type { Meta, StoryObj } from "@storybook/react-vite";

import { ${componentName} } from "./${componentName}";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof ${componentName}> = {
    title: "${layer}/${componentName}",
    component: ${componentName},
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ${componentName}>;

export const Light: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({}),
    ],
};`;
