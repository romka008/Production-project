import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
    title: "shared/Skeleton/old",
    component: Skeleton,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Normal: Story = {
    args: { width: "100%", height: 200 },
};

export const Circle: Story = {
    args: {
        border: "50%",
        width: 100,
        height: 100,
    },
};

export const NormalDark: Story = {
    args: { width: "100%", height: 200 },
};

export const CircleDark: Story = {
    args: {
        border: "50%",
        width: 100,
        height: 100,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const CircleBlue: Story = {
    args: {
        border: "50%",
        width: 100,
        height: 100,
    },
    decorators: [ThemeDecorator(Theme.BLUE)],
};
