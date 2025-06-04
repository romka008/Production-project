import type { Meta, StoryObj } from "@storybook/react-vite";
import { action } from "storybook/actions";

import { Tabs } from "./Tabs";
import { Theme } from "@/shared/const/theme";
import { NewDesignDecorator } from "@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator";

const meta: Meta<typeof Tabs> = {
    title: "shared/Tabs/newDesign",
    component: Tabs,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
    decorators: [NewDesignDecorator({ isAppRedesigned: true })],
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
    decorators: [NewDesignDecorator({ isAppRedesigned: true }, Theme.DARK)],
};
