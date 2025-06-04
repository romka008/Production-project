import type { Meta, StoryObj } from "@storybook/react-vite";

import { AvatarDropdown } from "./AvatarDropdown";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof AvatarDropdown> = {
    title: "features/AvatarDropdown/old",
    component: AvatarDropdown,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

export const Light: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
};
