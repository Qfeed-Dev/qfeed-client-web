"use client";

import styled from "styled-components";
import Text from "../common/Text";
import { motion } from "framer-motion";
import { changeBtnColor } from "src/constants/animation";

type ButtonState = "active" | "disabled";

interface ButtonProps {
    state?: ButtonState;
    text: string;
    onClick: any;
    bottom?: boolean;
}

const ButtonFillLarge = ({
    state,
    text = "",
    bottom = true,
    onClick
}: ButtonProps) => {
    return (
        <ButtonWrapper
            initial="disabled"
            animate={state}
            variants={changeBtnColor}
            $bottom={bottom}
            onClick={onClick}
            disabled={state === "disabled"}
        >
            <Text typo="Subtitle2b">{text}</Text>
        </ButtonWrapper>
    );
};

const ButtonWrapper = styled(motion.button)<{
    $bottom: boolean;
}>`
    width: 100%;
    min-height: 52px;
    padding: 0.88rem 3.75rem;
    margin-bottom: ${({ $bottom }) => $bottom && "8rem"};

    text-align: center;
    border-radius: 10px;
`;

export default ButtonFillLarge;
