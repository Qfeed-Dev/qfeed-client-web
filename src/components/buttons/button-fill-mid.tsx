"use client";

import styled from "styled-components";
import Text from "../common/Text";
import { colors } from "styles/theme";

interface ButtonProps {
    text: string;
    onClick: any;
}

const ButtonFillMid = ({ text = "", onClick }: ButtonProps) => {
    return (
        <ButtonWrapper onClick={onClick}>
            <Text typo="Subtitle1b">{text}</Text>
        </ButtonWrapper>
    );
};

const ButtonWrapper = styled.button`
    width: 100%;
    padding: 14px 60px;

    text-align: center;
    color: ${colors.light_qblack};
    background: ${colors.light_qwhite};

    border-radius: 10px;
    white-space: nowrap;
`;

export default ButtonFillMid;
