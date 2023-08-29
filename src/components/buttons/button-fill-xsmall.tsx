"use client";

import styled from "styled-components";
import Text from "../common/Text";
import { KeyOfColor, colors } from "styles/theme";

interface ButtonProps {
    text: string;
    onClick: any;
    color: KeyOfColor;
}

const ButtonFillXSmall = ({ text = "", onClick, color }: ButtonProps) => {
    return (
        <ButtonWrapper onClick={onClick} color={color}>
            <Text typo="Subtitle1b">{text}</Text>
        </ButtonWrapper>
    );
};

const ButtonWrapper = styled.button<{ color: any }>`
    padding: 5px 18px;

    text-align: center;
    color: ${colors.light_qblack};
    background: ${({ color }) => colors[color]};

    border-radius: 10px;
    white-space: nowrap;
`;

export default ButtonFillXSmall;
