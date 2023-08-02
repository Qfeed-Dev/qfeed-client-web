"use client";

import styled from "styled-components";
import Text from "../common/Text";
import { theme } from "styles/theme";

export type ButtonState = "active" | "disabled";

interface ButtonProps {
    state?: ButtonState;
    text: string;
    onClick: any;
}

const TEXT_COLOR = {
    default: {
        active: theme.colors.light_qblack,
        disabled: theme.colors.light_qwhite
    }
};

const BUTTON_COLOR = {
    default: {
        active: theme.colors.light_qwhite,
        disabled: theme.colors.light_gray2
    }
};

const ButtonFillLarge = ({
    state = "active",
    text = "",
    onClick
}: ButtonProps) => {
    return (
        <ButtonWrapper state={state} text={text} onClick={onClick}>
            <Text typo="Subtitle2b">{text}</Text>
        </ButtonWrapper>
    );
};

const ButtonWrapper = styled.button<{
    state: ButtonState;
    text: string;
}>`
    width: 100%;
    min-height: 52px;
    padding: 0.88rem 3.75rem;

    text-align: center;
    color: ${({ state }) => TEXT_COLOR.default[state]};
    background: ${({ state }) => BUTTON_COLOR.default[state]};

    border-radius: 10px;
`;

export default ButtonFillLarge;
