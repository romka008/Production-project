import type { Meta, StoryObj } from "@storybook/react";

import { Sidebar } from "./Sidebar";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Theme } from "@/shared/const/theme";
import { NewDesignDecorator } from "@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator";

const meta: Meta<typeof Sidebar> = {
    title: "widgets/Sidebar/newDesign",
    component: Sidebar,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
    decorators: [NewDesignDecorator({ isAppRedesigned: true })],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({
            user: { authData: {} },
        }),
    ],
};

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            user: { authData: {} },
        }),
    ],
};

export const NoAuth: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            user: {},
        }),
    ],
};
