import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { Dropdown } from "./Dropdown";
import { Button } from "../../../Button/Button";

const meta: Meta<typeof Dropdown> = {
    title: "shared/Dropdown/old",
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
            { content: "Первый пункт меню", key: "1" },
            { content: "Второй пункт меню", key: "2" },
            { content: "Третий пункт меню", key: "3" },
        ],
    },
};

export const Dark: Story = {
    args: {
        trigger: <Button>Открыть</Button>,
        items: [
            { content: "Первый пункт меню", key: "1" },
            { content: "Второй пункт меню", key: "2" },
            { content: "Третий пункт меню", key: "3" },
        ],
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
