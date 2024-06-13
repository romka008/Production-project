import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface IPortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Portal = ({ children, element = document.body }: IPortalProps) => {
    return createPortal(children, element);
};
