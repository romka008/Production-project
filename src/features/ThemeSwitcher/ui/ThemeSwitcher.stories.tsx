import type { Meta, StoryObj } from "@storybook/react-vite";

import { ThemeSwitcher } from "./ThemeSwitcher";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { NewDesignDecorator } from "@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator";

const meta: Meta<typeof ThemeSwitcher> = {
    title: "widgets/ThemeSwitcher",
    component: ThemeSwitcher,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
    decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Light: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const NewDesignLight: Story = {
    args: {},
    decorators: [NewDesignDecorator({ isAppRedesigned: true })],
};

export const NewDesignDark: Story = {
    args: {},
    decorators: [NewDesignDecorator({ isAppRedesigned: true }, Theme.DARK)],
};
