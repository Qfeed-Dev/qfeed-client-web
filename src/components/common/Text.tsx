import styled from "styled-components";
import { KeyOfTypo, KeyOfColor, theme } from "styles/theme";

const Text = styled.div<{
    typo: KeyOfTypo;
    color?: KeyOfColor;
}>`
    ${({ typo }) => theme.typo[typo]};
    color: ${({ color }) => color && theme.colors[color]};
`;

export default Text;
