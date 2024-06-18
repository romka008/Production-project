import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof Button> = {
    title: "shared/Button/newDesign",
    component: Button,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: "Button",
    },
};

export const Clear: Story = {
    args: {
        children: "Button",
        variant: "clear",
    },
};

export const ClearInverted: Story = {
    args: {
        children: "Button",
        variant: "clearInverted",
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
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const BackgroundTheme: Story = {
    args: {
        children: "Button",
        variant: "background",
    },
};

export const BackgroundInverted: Story = {
    args: {
        children: "Button",
        variant: "backgroundInverted",
    },
};

export const Square: Story = {
    args: {
        children: ">",
        variant: "backgroundInverted",
        square: true,
    },
};

export const SquareSizeL: Story = {
    args: {
        children: ">",
        variant: "backgroundInverted",
        square: true,
        size: "l",
    },
};

export const SquareSizeXL: Story = {
    args: {
        children: ">",
        variant: "backgroundInverted",
        square: true,
        size: "xl",
    },
};
