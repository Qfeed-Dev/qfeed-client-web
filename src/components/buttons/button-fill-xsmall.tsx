"use client";

import styled from "styled-components";
import Text from "../common/Text";
import { motion } from "framer-motion";
import { KeyOfColor, colors } from "styles/theme";
import { changeXSBtnColor } from "src/constants/animation";

type ButtonState = "active" | "disabled";

interface ButtonProps {
    text: string;
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
            <Text typo="Subtitle1b">{text}</Text>
        </ButtonWrapper>
    );
};

const ButtonWrapper = styled(motion.button)`
    padding: 5px 18px;

    text-align: center;

    border-radius: 10px;
    white-space: nowrap;
`;

export default ButtonFillXSmall;
