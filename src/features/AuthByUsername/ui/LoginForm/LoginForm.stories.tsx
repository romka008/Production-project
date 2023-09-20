import type { Meta, StoryObj } from "@storybook/react";

import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import LoginForm from "./LoginForm";

const meta: Meta<typeof LoginForm> = {
    title: "shared/LoginForm",
    component: LoginForm,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: { username: "UserName", password: "qwerty" },
        }),
    ],
};

export const WithError: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: { username: "UserName", password: "qwerty", error: "Error" },
        }),
    ],
};

export const Loading: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: { isLoading: true },
        }),
    ],
};
