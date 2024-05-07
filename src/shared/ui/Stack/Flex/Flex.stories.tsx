import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { Flex } from "./Flex";

const meta: Meta<typeof Flex> = {
    title: "shared/Flex",
    component: Flex,
    // parameters: {
    //     layout: "centered",
    // },
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Normal: Story = {
    args: {},
};

export const NormalDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Row: Story = {
    args: {
        children: (
            <>
                <div>Текст</div>
                <div>row</div>
            </>
        ),
    },
};

export const Column: Story = {
    args: {
        direction: "column",
        children: (
            <>
                <div>Текст</div>
                <div>column</div>
            </>
        ),
    },
};

export const RowGap4: Story = {
    args: {
        gap: "4",
        children: (
            <>
                <div>Текст</div>
                <div>column</div>
            </>
        ),
    },
};

export const RowGap8: Story = {
    args: {
        gap: "8",
        children: (
            <>
                <div>Текст</div>
                <div>column</div>
            </>
        ),
    },
};

export const RowGap16: Story = {
    args: {
        gap: "16",
        children: (
            <>
                <div>Текст</div>
                <div>column</div>
            </>
        ),
    },
};

export const ColumnGap16: Story = {
    args: {
        direction: "column",
        gap: "16",
        children: (
            <>
                <div>Текст</div>
                <div>column</div>
            </>
        ),
    },
};

export const ColumnGap32: Story = {
    args: {
        direction: "column",
        gap: "32",
        children: (
            <>
                <div>Текст</div>
                <div>column</div>
            </>
        ),
    },
};

export const ColumnIlignEnd: Story = {
    args: {
        direction: "column",
        align: "end",
        children: (
            <>
                <div>Текст</div>
                <div>column</div>
            </>
        ),
    },
};
