import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Input> = {
    title: "shared/Input",
    component: Input,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args: {
        value: "Текст",
        placeholder: "Введите текст",
    },
};
