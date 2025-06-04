import type { Meta, StoryObj } from "@storybook/react-vite";

import { Input } from "./Input";
import { NewDesignDecorator } from "@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator";

const meta: Meta<typeof Input> = {
    title: "shared/Input/newDesign",
    component: Input,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
    decorators: [NewDesignDecorator({ isAppRedesigned: true })],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args: {
        value: "Текст",
        placeholder: "Введите текст",
    },
};
