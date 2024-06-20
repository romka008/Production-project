import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "@/shared/const/theme";

import { ListBox } from "./ListBox";
import { NewDesignDecorator } from "@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator";

const meta: Meta<typeof ListBox> = {
    title: "shared/ListBox/newDesign",
    component: ListBox,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
    decorators: [
        Story => <div style={{ padding: "100px" }}>{<Story />}</div>,
        NewDesignDecorator({ isAppRedesigned: true }),
    ],
};

export default meta;
type Story = StoryObj<typeof ListBox>;

const options = [
    { value: "Russia", content: "Russia" },
    { value: "Belarus", content: "Kazahstan" },
    { value: "Kazahstan", content: "Belarus" },
    { value: "Usbekistan", content: "Usbekistan" },
];

export const Primary: Story = {
    args: {
        items: options,
        defaultValue: "Выберите страну",
    },
};

export const Dark: Story = {
    args: {
        items: options,
        defaultValue: "Выберите страну",
    },
    decorators: [NewDesignDecorator({ isAppRedesigned: true }, Theme.DARK)],
};

export const PrimaryReadonly: Story = {
    args: {
        items: options,
        defaultValue: "Выберите страну",
        readOnly: true,
    },
};

export const DarkReadonly: Story = {
    args: {
        items: options,
        defaultValue: "Выберите страну",
        readOnly: true,
    },
    decorators: [NewDesignDecorator({ isAppRedesigned: true }, Theme.DARK)],
};

export const DarkDirectionTopRight: Story = {
    args: {
        items: options,
        defaultValue: "Выберите страну",
        direction: "top right",
    },
    decorators: [NewDesignDecorator({ isAppRedesigned: true }, Theme.DARK)],
};

export const DarkDirectionTopLeft: Story = {
    args: {
        items: options,
        defaultValue: "Выберите страну",
        direction: "top left",
    },
    decorators: [NewDesignDecorator({ isAppRedesigned: true }, Theme.DARK)],
};

export const DarkDirectionBottomRight: Story = {
    args: {
        items: options,
        defaultValue: "Выберите страну",
        direction: "bottom right",
    },
    decorators: [NewDesignDecorator({ isAppRedesigned: true }, Theme.DARK)],
};

export const DarkDirectionBottomLeft: Story = {
    args: {
        items: options,
        defaultValue: "123",
        direction: "bottom left",
    },
};
