import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";

import { StarRating } from "./StarRating";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof StarRating> = {
    title: "shared/StarRating/old",
    component: StarRating,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof StarRating>;

export const Primary: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
