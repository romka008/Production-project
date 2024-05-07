import type { Meta, StoryObj } from "@storybook/react";

import AddNewComment from "./AddNewComment";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof AddNewComment> = {
    title: "features/AddNewComment",
    component: AddNewComment,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AddNewComment>;

export const Normal: Story = {
    args: {},
    decorators: [StoreDecorator({ addNewComment: { text: "Текст для комментария" } })],
};

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({ addNewComment: { text: "Текст для комментария" } }),
    ],
};
