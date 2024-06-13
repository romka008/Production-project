import { Flex, IFlexProps } from "../Flex/Flex";

type TVStackProps = Omit<IFlexProps, "direction">;

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const VStack = ({ ...rest }: TVStackProps) => {
    return <Flex direction="column" align="start" {...rest} />;
};
