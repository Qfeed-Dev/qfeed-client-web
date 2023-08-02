"use client";

import { useState } from "react";
import styled from "styled-components";
import Text from "../common/Text";
import Flex from "../common/Flex";
import { colors, theme } from "styles/theme";

export type ButtonState = "active" | "disabled";

const TEXT_COLOR = {
    default: {
        active: theme.colors.light_qblack,
        disabled: theme.colors.light_qwhite
    }
};

const BUTTON_COLOR = {
    default: {
        active: theme.colors.light_qwhite,
        disabled: ""
    }
};

const ButtonGenderSelect = () => {
    const [selected, setSelected] = useState<string>("여성");

    return (
        <Flex justify="start" gap={24}>
            <Text typo="Subtitle1r">성별</Text>
            <ButtonWrapper>
                <Button
                    state={selected === "여성" ? "active" : "disabled"}
                    onClick={() => setSelected("여성")}
                >
                    <Text typo="Subtitle1r">여성</Text>
                </Button>
                <Button
                    state={selected === "남성" ? "active" : "disabled"}
                    onClick={() => setSelected("남성")}
                >
                    <Text typo="Subtitle1r">남성</Text>
                </Button>
            </ButtonWrapper>
        </Flex>
    );
};

const ButtonWrapper = styled.div`
    width: 146px;
    display: flex;

    border: 1px solid ${colors.light_qwhite};
    border-radius: 10px;
    overflow: hidden;
`;

const Button = styled.button<{
    state: ButtonState;
}>`
    width: 100%;
    padding: 0.62rem 1.5rem;

    text-align: center;
    color: ${({ state }) => TEXT_COLOR.default[state]};
    background: ${({ state }) => BUTTON_COLOR.default[state]};

    white-space: nowrap;
`;

export default ButtonGenderSelect;
