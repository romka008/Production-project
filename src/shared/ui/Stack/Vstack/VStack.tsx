import { Flex, IFlexProps } from "../Flex/Flex";

type TVStackProps = Omit<IFlexProps, "direction">;

export const VStack = ({ ...rest }: TVStackProps) => {
    return <Flex direction="column" {...rest} align="start" />;
};
