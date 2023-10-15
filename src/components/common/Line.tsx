import styled from "styled-components";
import { KeyOfColor } from "styles/theme";
import { colors } from "styles/theme";

const Line = styled.div<{
    border?: number;
    color?: KeyOfColor;
}>`
    width: 100%;
    height: ${({ border }) => (border ? border : 1)}px;
    color: ${({ color }) => (color ? colors[color] : colors.light_qblack)};
    border: none;
`;

export default Line;
