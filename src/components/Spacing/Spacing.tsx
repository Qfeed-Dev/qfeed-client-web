"use client";
import styled from "styled-components";

interface Props {
    size: number;
}

const Spacing = ({ size }: Props) => {
    return <SpacingWrapper size={size} />;
};

const SpacingWrapper = styled.div<{ size: number }>`
    width: 100%;
    height: ${({ size }) => size + "px"};
`;

export default Spacing;
