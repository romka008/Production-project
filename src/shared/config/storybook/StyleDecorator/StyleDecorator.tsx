import { Decorator } from "@storybook/react-vite";
import "../../../../app/styles/index.scss";

export const StyleDecorator: Decorator = Story => (
    <div>
        <Story />
    </div>
);
