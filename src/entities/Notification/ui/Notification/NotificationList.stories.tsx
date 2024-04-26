import type { Meta, StoryObj } from "@storybook/react";

import { NotificationList } from "./NotificationList";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta: Meta<typeof NotificationList> = {
    title: "entities/NotificationList",
    component: NotificationList,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof NotificationList>;

export const Light: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
};
