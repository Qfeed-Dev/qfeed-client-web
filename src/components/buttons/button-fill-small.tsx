"use client";

import styled from "styled-components";
import Text from "../common/Text";
import { colors } from "styles/theme";

interface ButtonProps {
    text: string;
    onClick: any;
}

const ButtonFillSmall = ({ text = "", onClick }: ButtonProps) => {
    return (
        <ButtonWrapper onClick={onClick}>
            <Text typo="Subtitle1b">{text}</Text>
        </ButtonWrapper>
    );
};

const ButtonWrapper = styled.button`
    padding: 0.5rem;

    text-align: center;
    color: ${colors.light_qblack};
    background: ${colors.light_qwhite};

    border-radius: 10px;
    white-space: nowrap;
`;

export default ButtonFillSmall;
