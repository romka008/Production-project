import type { Meta, StoryObj } from "@storybook/react-vite";

import { AppLink, AppLinkTheme } from "./AppLink";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof AppLink> = {
    title: "shared/AppLink/old",
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
    args: { children: "Текст", theme: AppLinkTheme.PRIMARY },
};

export const Secondary: Story = {
    args: { children: "Текст", theme: AppLinkTheme.SECONDARY },
};

export const PrimaryDark: Story = {
    args: { children: "Текст", theme: AppLinkTheme.PRIMARY },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SecondaryDark: Story = {
    args: { children: "Текст", theme: AppLinkTheme.SECONDARY },
    decorators: [ThemeDecorator(Theme.DARK)],
};
