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

export const changeXSBtnColor = {
    disabled: {
        transition: {
            duration: 0.2
        },
        color: theme.colors.light_qblack,
        background: theme.colors.light_gray1
    },
    active: {
        transition: {
            duration: 0.2
        },
        color: theme.colors.light_qblack,
        background: theme.colors.primary_qgreen
    },
    default: {
        transition: {
            duration: 0.2
        },
        color: theme.colors.light_qblack,
        background: theme.colors.light_qwhite
    }
};

export const modal = {
    hidden: {
        y: "-20vh",
        opacity: 0
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500
        }
    },
    exit: {
        y: "20vh",
        opacity: 0
    }
};
