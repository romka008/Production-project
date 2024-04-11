import { Flex, IFlexProps } from "../Flex/Flex";

type THStackProps = Omit<IFlexProps, "direction">;

export const HStack = ({ ...rest }: THStackProps) => {
    return <Flex direction="row" {...rest} />;
};
