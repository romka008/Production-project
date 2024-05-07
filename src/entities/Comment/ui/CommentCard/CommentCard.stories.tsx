import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { CommentCard } from "./CommentCard";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof CommentCard> = {
    title: "entities/Comment/CommentCard",
    component: CommentCard,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Normal: Story = {
    args: {
        comment: {
            id: "2",
            text: "Текст первого комментария",
            user: {
                id: "2",
                username: "Пользователь",
                avatar: "https://kartinki.pibig.info/uploads/posts/2023-04/1682095256_kartinki-pibig-info-p-kartinka-neizvestnogo-cheloveka-arti-vkont-59.png",
            },
        },
    },
};

export const Dard: Story = {
    args: {
        comment: {
            id: "2",
            text: "Текст первого комментария",
            user: {
                id: "2",
                username: "Пользователь",
                avatar: "https://kartinki.pibig.info/uploads/posts/2023-04/1682095256_kartinki-pibig-info-p-kartinka-neizvestnogo-cheloveka-arti-vkont-59.png",
            },
        },
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
