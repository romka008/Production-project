import type { Meta, StoryObj } from "@storybook/react";

import ProfilePage from "./ProfilePage";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof ProfilePage> = {
    title: "pages/ProfilePage",
    component: ProfilePage,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({
            profile: { data: undefined, error: undefined, isLoading: false, readonly: true },
        }),
    ],
};

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            profile: { data: undefined, error: undefined, isLoading: false, readonly: true },
        }),
    ],
};
