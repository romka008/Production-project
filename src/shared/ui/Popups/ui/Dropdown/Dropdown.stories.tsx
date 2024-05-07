import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { Dropdown } from "./Dropdown";
import { Button } from "../../../Button/Button";

const meta: Meta<typeof Dropdown> = {
    title: "shared/Dropdown",
    component: Dropdown,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const options = [
    { value: "Russia", content: "Russia" },
    { value: "Belarus", content: "Kazahstan" },
    { value: "Kazahstan", content: "Belarus" },
    { value: "Usbekistan", content: "Usbekistan" },
];

export const Primary: Story = {
    args: {
        trigger: <Button>Открыть</Button>,
        items: [
            { content: "Первый пункт меню" },
            { content: "Второй пункт меню" },
            { content: "Третий пункт меню" },
        ],
    },
};

export const Dark: Story = {
    args: {
        trigger: <Button>Открыть</Button>,
        items: [
            { content: "Первый пункт меню" },
            { content: "Второй пункт меню" },
            { content: "Третий пункт меню" },
        ],
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
