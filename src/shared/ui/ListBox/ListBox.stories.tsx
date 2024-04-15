import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

import { ListBox } from "./ListBox";

const meta: Meta<typeof ListBox> = {
    title: "shared/ListBox",
    component: ListBox,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
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
    decorators: [ThemeDecorator(Theme.DARK)],
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
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkDirectionTop: Story = {
    args: {
        items: options,
        defaultValue: "Выберите страну",
        direction: "top",
    },
};
