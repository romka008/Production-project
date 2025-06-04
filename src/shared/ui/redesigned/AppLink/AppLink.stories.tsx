import type { Meta, StoryObj } from "@storybook/react-vite";

import { AppLink } from "./AppLink";
import { Theme } from "@/shared/const/theme";
import { NewDesignDecorator } from "@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator";

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
    decorators: [NewDesignDecorator({ isAppRedesigned: true })],
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
    decorators: [NewDesignDecorator({ isAppRedesigned: true }, Theme.DARK)],
};

export const RedDark: Story = {
    args: { children: "Текст", variant: "red" },
    decorators: [NewDesignDecorator({ isAppRedesigned: true }, Theme.DARK)],
};
