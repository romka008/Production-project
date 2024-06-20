import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import { Theme } from "@/shared/const/theme";
import { NewDesignDecorator } from "@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator";

const meta: Meta<typeof Button> = {
    title: "shared/Button/newDesign",
    component: Button,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
    decorators: [NewDesignDecorator({ isAppRedesigned: true })],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Clear: Story = {
    args: {
        children: "Button",
        variant: "clear",
    },
};

export const Outline: Story = {
    args: {
        children: "Button",
        variant: "outline",
    },
};

export const OutlineSizeL: Story = {
    args: {
        children: "Button",
        variant: "outline",
        size: "l",
    },
};

export const OutlineSizeXl: Story = {
    args: {
        children: "Button",
        variant: "outline",
        size: "xl",
    },
};

export const OutlineDark: Story = {
    args: {
        children: "Button",
        variant: "outline",
    },
    decorators: [NewDesignDecorator({ isAppRedesigned: true }, Theme.DARK)],
};

export const Square: Story = {
    args: {
        children: ">",
        square: true,
    },
};

export const SquareSizeL: Story = {
    args: {
        children: ">",
        square: true,
        size: "l",
    },
};

export const SquareSizeXL: Story = {
    args: {
        children: ">",
        square: true,
        size: "xl",
    },
};
