import type { Meta, StoryObj } from "@storybook/react-vite";

import { ArticleListViewSelector } from "./ArticleListViewSelector";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof ArticleListViewSelector> = {
    title: "features/ArticleListViewSelector",
    component: ArticleListViewSelector,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticleListViewSelector>;

export const Light: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
