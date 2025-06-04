import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { Popover } from "./Popover";

const meta: Meta<typeof Popover> = {
    title: "shared/Popover/old",
    component: Popover,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Primary: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
