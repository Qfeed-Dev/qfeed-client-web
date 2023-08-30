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

export const loadingContainerVariants = {
    start: {
        transition: {
            staggerChildren: 0.2
        }
    },
    end: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

export const loadingCircleVariants = {
    start: {
        y: "0%"
    },
    end: {
        y: "100%"
    }
};

export const loadingCircleTransition = {
    duration: 0.5,
    yoyo: Infinity,
    ease: "easeInOut"
};

export const enterComponentVariants = {
    hidden: {
        y: "2vh",
        opacity: 0
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    },
    exit: {
        y: "2vh",
        opacity: 0
    }
};
