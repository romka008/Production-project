import type { Meta, StoryObj } from "@storybook/react-vite";

import { Text } from "./Text";
import { Theme } from "@/shared/const/theme";
import { NewDesignDecorator } from "@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator";

const meta: Meta<typeof Text> = {
    title: "shared/Text/newDesign",
    component: Text,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
    decorators: [NewDesignDecorator({ isAppRedesigned: true })],
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
        variant: "error",
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
    decorators: [NewDesignDecorator({ isAppRedesigned: true }, Theme.DARK)],
};

export const OnlyTitleDark: Story = {
    args: {
        title: "Только заголовок, темная тема",
    },
    decorators: [NewDesignDecorator({ isAppRedesigned: true }, Theme.DARK)],
};

export const OnlyTextDark: Story = {
    args: {
        text: "Только текст, темная тема",
    },
    decorators: [NewDesignDecorator({ isAppRedesigned: true }, Theme.DARK)],
};

export const SizeL: Story = {
    args: {
        title: "Заголовок",
        text: "Некоторый текст",
        size: "l",
    },
};

export const SizeM: Story = {
    args: {
        title: "Заголовок",
        text: "Некоторый текст",
        size: "m",
    },
};

export const SizeS: Story = {
    args: {
        title: "Заголовок",
        text: "Некоторый текст",
        size: "s",
    },
};
