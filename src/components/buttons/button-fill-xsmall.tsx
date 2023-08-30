"use client";

import React from "react";
import styled from "styled-components";
import Text from "../common/Text";
import { motion } from "framer-motion";
import { KeyOfColor, colors } from "styles/theme";
import { changeXSBtnColor } from "src/constants/animation";

type ButtonState = "active" | "disabled" | "default";

interface ButtonProps {
    text: string | React.ReactNode;
    onClick: any;
    state: ButtonState;
}

const ButtonFillXSmall = ({ text = "", onClick, state }: ButtonProps) => {
    return (
        <ButtonWrapper
            initial={state}
            animate={state}
            variants={changeXSBtnColor}
            onClick={onClick}
        >
            {typeof text === "string" ? (
                <Text typo="Subtitle1b">{text}</Text>
            ) : (
                text
            )}
        </ButtonWrapper>
    );
};

const ButtonWrapper = styled(motion.button)`
    min-width: 72px;
    padding: 5px 0.5rem;

    text-align: center;

    border-radius: 10px;
    white-space: nowrap;
`;

export default ButtonFillXSmall;
