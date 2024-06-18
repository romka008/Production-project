import type { Meta, StoryObj } from "@storybook/react";

import { AppLink } from "./AppLink";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof AppLink> = {
    title: "shared/AppLink/newDesign",
    component: AppLink,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
    args: {
        to: "/",
    },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: { children: "Текст", variant: "primary" },
};

export const Red: Story = {
    args: { children: "Текст", variant: "red" },
};

export const PrimaryDark: Story = {
    args: { children: "Текст", variant: "primary" },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedDark: Story = {
    args: { children: "Текст", variant: "red" },
    decorators: [ThemeDecorator(Theme.DARK)],
};
