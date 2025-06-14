import type { Meta, StoryObj } from "@storybook/react-vite";

import { Sidebar } from "./Sidebar";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Theme } from "@/shared/const/theme";
import { NewDesignDecorator } from "@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";

const meta: Meta<typeof Sidebar> = {
    title: "widgets/Sidebar/newDesign",
    component: Sidebar,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
    decorators: [ThemeDecorator(Theme.LIGHT), NewDesignDecorator({ isAppRedesigned: true })],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            user: { authData: {} },
        }),
    ],
};

export const Dark: Story = {
    args: {},
    decorators: [
        NewDesignDecorator({ isAppRedesigned: true }, Theme.DARK),
        StoreDecorator({
            user: { authData: {} },
        }),
    ],
};

export const NoAuth: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            user: {},
        }),
    ],
};
