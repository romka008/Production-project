import type { Meta, StoryObj } from "@storybook/react";

import { NewDesignDecorator } from "@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator";
import { Avatar } from "./Avatar";
import AvatarImg from "../../../assets/tests/storybook.jpg";

const meta: Meta<typeof Avatar> = {
    title: "shared/Avatar/newDesign",
    component: Avatar,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
    decorators: [NewDesignDecorator({ isAppRedesigned: true })],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
    args: { size: 150, src: AvatarImg },
};

export const Small: Story = {
    args: { size: 50, src: AvatarImg },
};
