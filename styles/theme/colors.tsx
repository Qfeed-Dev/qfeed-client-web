import { TypeOfColor } from "./theme";

const hexToRGBA = (color: string, opacity: number) => {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${opacity * 0.01})`;
};

export const colors = {
    primary_qyellow: "#EEF619",
    primary_qpink: "#FE98CA",
    primary_qorange: "#FF812F",
    primary_qred: "#FF5B5B",
    primary_qblue: "#0167F7",
    primary_qgreen: "#28D3A7",

    light_qblack: "#131313",
    light_qwhite: "#FFFFFF",
    light_gray0: "#D9D9D9",
    light_gray1: "#BDBDBD",
    light_gray2: "#757575",
    light_gray3: "#484848",

    line_black_70: hexToRGBA("#131313", 70),
    line_black_50: hexToRGBA("#131313", 50),
    line_black_30: hexToRGBA("#131313", 30),
    line_black_5: hexToRGBA("#131313", 5),
    line_white_70: hexToRGBA("#FFFFFF", 70),
    line_white_50: hexToRGBA("#FFFFFF", 50),
    line_white_30: hexToRGBA("#FFFFFF", 30),
    line_white_5: hexToRGBA("#FFFFFF", 5)
} as const;

// 12 개
export const repeatBackgroundColor = [
    // colors.primary_qpink,
    // colors.primary_qorange,
    // colors.primary_qblue,
    // colors.primary_qyellow,
    // colors.primary_qyellow,
    // colors.primary_qgreen,
    // colors.primary_qpink,
    // colors.primary_qred,
    // colors.primary_qorange,
    // colors.primary_qblue,
    // colors.primary_qred,
    // colors.primary_qgreen

    "primary_qpink",
    "primary_qorange",
    "primary_qblue",
    "primary_qyellow",
    "primary_qgreen",
    "primary_qpink",
    "primary_qred",
    "primary_qorange",
    "primary_qblue",
    "primary_qred",
    "primary_qgreen"
];

export const repeatQuestionColor = [
    colors.primary_qyellow,
    colors.primary_qpink,
    colors.primary_qblue,
    colors.primary_qorange,
    colors.primary_qred,
    colors.primary_qgreen
];

export const repeatCoinColor = [
    colors.primary_qblue,
    colors.primary_qgreen,
    colors.primary_qorange,
    colors.primary_qpink
];
