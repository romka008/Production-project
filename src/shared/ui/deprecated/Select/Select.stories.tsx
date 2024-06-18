import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./Select";

const meta: Meta<typeof Select> = {
    title: "shared/Select/old",
    component: Select,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
    args: {
        options: [
            { content: "Тут какой-то контент", value: "123" },
            { content: "Второй контент", value: "123456" },
        ],
    },
};
