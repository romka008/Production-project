import type { Meta, StoryObj } from "@storybook/react";

import { Text, TextSize, TextTheme } from "./Text";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Text> = {
    title: "shared/Text",
    component: Text,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: "Заголовок",
        text: "Текст",
    },
};

export const Error: Story = {
    args: {
        title: "Title lorem ipsun",
        text: "Description Description Description Description",
        theme: TextTheme.ERROR,
    },
};

export const OnlyTitle: Story = {
    args: {
        title: "Только заголовок",
    },
};

export const OnlyText: Story = {
    args: {
        text: "Только текст",
    },
};

export const PrimaryDark: Story = {
    args: {
        title: "Заголовок",
        text: "Некоторый текст",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitleDark: Story = {
    args: {
        title: "Только заголовок, темная тема",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTextDark: Story = {
    args: {
        text: "Только текст, темная тема",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SizeL: Story = {
    args: {
        title: "Заголовок",
        text: "Некоторый текст",
        size: TextSize.L,
    },
};

export const SizeM: Story = {
    args: {
        title: "Заголовок",
        text: "Некоторый текст",
        size: TextSize.M,
    },
};

export const SizeS: Story = {
    args: {
        title: "Заголовок",
        text: "Некоторый текст",
        size: TextSize.S,
    },
};
