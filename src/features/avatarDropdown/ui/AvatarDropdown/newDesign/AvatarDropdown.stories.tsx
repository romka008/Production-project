import type { Meta, StoryObj } from "@storybook/react-vite";

import { AvatarDropdown } from "./AvatarDropdown";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { NewDesignDecorator } from "@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator";

const meta: Meta<typeof AvatarDropdown> = {
    title: "features/AvatarDropdown/newDesing",
    component: AvatarDropdown,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
    decorators: [NewDesignDecorator({ isAppRedesigned: true })],
};

export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

export const Light: Story = {
    args: {},
    decorators: [StoreDecorator({})],
};
