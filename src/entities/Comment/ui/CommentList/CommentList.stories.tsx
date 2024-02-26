import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { CommentList } from "./CommentList";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof CommentList> = {
    title: "entities/Comment/CommentList",
    component: CommentList,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Normal: Story = {
    args: {
        comments: [
            {
                id: "1",
                text: "Текст первого комментария",
                user: { id: "1", username: "Пользователь" },
            },
            {
                id: "2",
                text: "Текст первого комментария",
                user: {
                    id: "2",
                    username: "Пользователь",
                    avatar: "https://kartinki.pibig.info/uploads/posts/2023-04/1682095256_kartinki-pibig-info-p-kartinka-neizvestnogo-cheloveka-arti-vkont-59.png",
                },
            },
        ],
    },
};

export const Dard: Story = {
    args: {
        comments: [
            {
                id: "1",
                text: "Текст первого комментария",
                user: { id: "1", username: "Пользователь" },
            },
            {
                id: "2",
                text: "Текст первого комментария",
                user: {
                    id: "2",
                    username: "Пользователь",
                    avatar: "https://kartinki.pibig.info/uploads/posts/2023-04/1682095256_kartinki-pibig-info-p-kartinka-neizvestnogo-cheloveka-arti-vkont-59.png",
                },
            },
        ],
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Loading: Story = {
    args: {
        comments: [],
        isLoading: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
