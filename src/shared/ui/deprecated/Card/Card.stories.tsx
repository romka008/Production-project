import type { Meta, StoryObj } from "@storybook/react-vite";

import { Card } from "./Card";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";
import { Text } from "../Text/Text";

const meta: Meta<typeof Card> = {
    title: "shared/Card/old",
    component: Card,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Normal: Story = {
    args: {
        children: <Text title="Заголовок" text="Текст для проверки" />,
    },
};

export const Dark: Story = {
    args: {
        children: <Text title="Заголовок" text="Текст для проверки" />,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
