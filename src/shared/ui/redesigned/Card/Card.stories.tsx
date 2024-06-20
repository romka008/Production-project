import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";
import { Theme } from "@/shared/const/theme";
import { Text } from "../Text/Text";
import { NewDesignDecorator } from "@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator";

const meta: Meta<typeof Card> = {
    title: "shared/Card/newDesign",
    component: Card,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
    decorators: [NewDesignDecorator({ isAppRedesigned: true })],
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
    decorators: [NewDesignDecorator({ isAppRedesigned: true }, Theme.DARK)],
};
