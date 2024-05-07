import type { Meta, StoryObj } from "@storybook/react";

import ProfilePage from "./ProfilePage";
import AvatarImg from "@/shared/assets/tests/storybook.jpg";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";

const meta: Meta<typeof ProfilePage> = {
    title: "pages/ProfilePage",
    component: ProfilePage,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({
            profile: {
                form: {
                    age: 21,
                    first: "Ivan",
                    lastname: "Ivanov",
                    username: "admin",
                    city: "Moscow",
                    country: Country.Russia,
                    currency: Currency.RUB,
                    avatar: AvatarImg,
                },
            },
        }),
    ],
};

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            profile: {
                form: {
                    age: 21,
                    first: "Ivan",
                    lastname: "Ivanov",
                    username: "admin",
                    city: "Moscow",
                    country: Country.Russia,
                    currency: Currency.RUB,
                    avatar: AvatarImg,
                },
            },
        }),
    ],
};
