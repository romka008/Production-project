import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { Drawer } from "./Drawer";

const meta: Meta<typeof Drawer> = {
    title: "shared/Drawer/old",
    component: Drawer,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus tempore velit
        corporis pariatur iusto excepturi suscipit, quae dolorum nulla dicta, ratione nemo
        adipisci laboriosam quis accusantium corrupti at! Unde, temporibus.`,
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus tempore velit
        corporis pariatur iusto excepturi suscipit, quae dolorum nulla dicta, ratione nemo
        adipisci laboriosam quis accusantium corrupti at! Unde, temporibus.`,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
