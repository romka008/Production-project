import { TDropdownDirection } from "../../../types/ui";

import styles from "./popup.module.scss";

export const mapDirectionClass: Record<TDropdownDirection, string> = {
    "top left": styles.optionsTopLeft,
    "top right": styles.optionsTopRight,
    "bottom left": styles.optionsBottomLeft,
    "bottom right": styles.optionsBottomRight,
};
