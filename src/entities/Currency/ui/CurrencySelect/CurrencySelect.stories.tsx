import type { Meta, StoryObj } from "@storybook/react-vite";

import { CurrencySelect } from "./CurrencySelect";

const meta: Meta<typeof CurrencySelect> = {
    title: "entities/CurrencySelect",
    component: CurrencySelect,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

export const Primary: Story = {
    args: {},
};
