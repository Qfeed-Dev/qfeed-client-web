import styled from "styled-components";

const Flex = styled.div<{
    direction?: string;
    justify?: string;
    align?: string;
    gap?: number;
    width?: number;
    height?: number | string;
}>`
    display: flex;
    flex-direction: ${({ direction }) => (direction ? `${direction}` : "row")};
    justify-content: ${({ justify }) => (justify ? `${justify}` : "center")};
    align-items: ${({ align }) => (align ? `${align}` : "center")};
    gap: ${({ gap }) => (gap ? `${gap}px` : "0px")};
    width: ${({ width }) => (width ? `${width}px` : "100%")};
    height: ${({ height }) =>
        typeof height === "string" ? height : height ? `${height}px` : "auto"};
`;

export default Flex;
