import { theme } from "styles/theme";

export const dropdown = {
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2
        },
        display: "block"
    },
    hide: {
        opacity: 0,
        y: -5,
        transition: {
            duration: 0.2
        },
        transitionEnd: {
            display: "none"
        }
    }
};

export const changeBtnColor = {
    disabled: {
        transition: {
            duration: 0.2
        },
        color: theme.colors.light_qwhite,
        background: theme.colors.light_gray2
    },
    active: {
        transition: {
            duration: 0.2
        },
        color: theme.colors.light_qblack,
        background: theme.colors.light_qwhite
    }
};
