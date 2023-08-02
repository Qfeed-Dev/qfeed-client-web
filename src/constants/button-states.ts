import { theme } from "styles/theme";

export type ButtonState = "active" | "disabled";

export const TEXT_COLOR = {
    default: {
        active: theme.colors.light_qblack,
        disabled: theme.colors.light_qwhite
    }
};

export const BUTTON_COLOR = {
    default: {
        active: theme.colors.light_qwhite,
        disabled: theme.colors.light_gray2
    }
};
