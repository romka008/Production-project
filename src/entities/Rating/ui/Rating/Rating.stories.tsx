import type { Meta, StoryObj } from "@storybook/react";

import { Rating } from "./Rating";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof Rating> = {
    title: "entities/Rating",
    component: Rating,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Light: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
};
