import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "@/shared/const/theme";
import { NewDesignDecorator } from "@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator";

import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
    title: "shared/Skeleton/newDesign",
    component: Skeleton,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
    decorators: [NewDesignDecorator({ isAppRedesigned: true })],
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
    decorators: [NewDesignDecorator({ isAppRedesigned: true }, Theme.DARK)],
};

export const CircleDark: Story = {
    args: {
        border: "50%",
        width: 100,
        height: 100,
    },
    decorators: [NewDesignDecorator({ isAppRedesigned: true }, Theme.DARK)],
};

export const CircleYellow: Story = {
    args: {
        border: "50%",
        width: 100,
        height: 100,
    },
    decorators: [NewDesignDecorator({ isAppRedesigned: true }, Theme.BLUE)],
};
