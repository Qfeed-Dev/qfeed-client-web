import { repeatBackgroundColor } from "styles/theme";

export const getAppStateColor = (idx: number) =>
    repeatBackgroundColor[idx % repeatBackgroundColor.length];
