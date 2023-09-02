import styled from "styled-components";
import { KeyOfTypo, KeyOfColor, theme } from "styles/theme";

export const Text = styled.div<{
    typo?: KeyOfTypo;
    color?: KeyOfColor;
}>`
    ${({ typo }) => typo && theme.typo[typo]};
    color: ${({ color }) => color && theme.colors[color]};
    pointer-events: none;
`;

export default Text;
