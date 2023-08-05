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
