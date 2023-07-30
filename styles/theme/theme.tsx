import { colors } from "./colors";
import { typo } from "./typo";

export const customMediaQuery = (minWidth: number): string =>
    `@media (min-width: ${minWidth}px)`;

export const media = {
    custom: customMediaQuery,
    desktop: customMediaQuery(992),
    tablet: customMediaQuery(768),
    mobile: `@media (max-width : 767px)`
};

export interface TypeOfTheme {
    typo: TypeOfTypo;
    colors: TypeOfColor;
}

export const theme: TypeOfTheme = {
    typo,
    colors
};

export type TypeOfColor = typeof colors;
export type KeyOfColor = keyof typeof colors;

export type KeyofTheme = keyof typeof theme;

export type TypeOfTypo = typeof typo;
export type KeyOfTypo = keyof typeof typo;
