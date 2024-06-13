import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Tabs } from "./Tabs";
import { Theme } from "@/shared/const/theme";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";

const meta: Meta<typeof Tabs> = {
    title: "shared/Tabs",
    component: Tabs,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Primary: Story = {
    args: {
        tabs: [
            { content: "Первый таб", value: "Первый таб" },
            { content: "Второй таб", value: "Второй таб" },
            { content: "Третий таб", value: "Третий таб" },
        ],
        value: "Второй таб",
        onTabClick: action("onTabClick"),
    },
};

export const Dark: Story = {
    args: {
        tabs: [
            { content: "Первый таб", value: "Первый таб" },
            { content: "Второй таб", value: "Второй таб" },
            { content: "Третий таб", value: "Третий таб" },
        ],
        value: "Второй таб",
        onTabClick: action("onTabClick"),
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
