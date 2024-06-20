import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "@/shared/const/theme";

import { Popover } from "./Popover";
import { NewDesignDecorator } from "@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator";

const meta: Meta<typeof Popover> = {
    title: "shared/Popover/newDesign",
    component: Popover,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
    decorators: NewDesignDecorator({ isAppRedesigned: true }),
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Primary: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [NewDesignDecorator({ isAppRedesigned: true }, Theme.DARK)],
};
