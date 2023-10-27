import type { Meta, StoryObj } from "@storybook/react";

import AvatarImg from "shared/assets/tests/storybook.jpg";
import { ProfileCard } from "./ProfileCard";
import { Country } from "../../../../entities/Country";
import { Currency } from "../../../../entities/Currency";

const meta: Meta<typeof ProfileCard> = {
    title: "entities/ProfileCard",
    component: ProfileCard,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
    args: {
        formData: {
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
};

export const WithError: Story = {
    args: { error: "true" },
};

export const Loading: Story = {
    args: { isLoading: true },
};
