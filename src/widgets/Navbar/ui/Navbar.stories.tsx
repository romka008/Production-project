import type { Meta, StoryObj } from "@storybook/react";

import { Navbar } from "./Navbar";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Navbar> = {
    title: "widgets/Navbar",
    component: Navbar,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dard: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
