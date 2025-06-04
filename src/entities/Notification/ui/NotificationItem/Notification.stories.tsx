import type { Meta, StoryObj } from "@storybook/react-vite";

import { NotificationItem } from "./NotificationItem";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof NotificationItem> = {
    title: "entities/NotificationItem",
    component: NotificationItem,
    args: {
        item: {
            id: "string",
            title: "Заголовок",
            description: "Описание",
        },
    },
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const Light: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
};
