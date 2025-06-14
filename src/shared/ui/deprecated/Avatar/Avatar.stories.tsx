import type { Meta, StoryObj } from "@storybook/react-vite";

import { Avatar } from "./Avatar";
import AvatarImg from "../../../assets/tests/storybook.jpg";

const meta: Meta<typeof Avatar> = {
    title: "shared/Avatar/old",
    component: Avatar,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
    args: { size: 150, src: AvatarImg },
};

export const Small: Story = {
    args: { size: 50, src: AvatarImg },
};
