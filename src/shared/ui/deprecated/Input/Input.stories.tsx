import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

const meta: Meta<typeof Input> = {
    title: "shared/Input/old",
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
