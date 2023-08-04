"use client";
import { forwardRef } from "react";
import { colors } from "src/constants/colors";
import { styled } from "styled-components";
import { match } from "ts-pattern";
import { Text } from "../common/Text";

interface Props {
    type: "primary" | "secondary" | "default";
    children?: any;
}

const Button = forwardRef(function Button(
    { children, type = "primary", ...props }: Props,
    ref
) {
    return (
        <ButtonWrapper
            color={match(type)
                .with("primary", () => colors.Qblack)
                .with("secondary", () => colors.Qwhite)
                .exhaustive()}
            backgroundColor={match(type)
                .with("primary", () => colors.Qwhite)
                .with("secondary", () => colors.Qblack)
                .exhaustive()}
        >
            <Text typo="Subtitle1b" style={{ margin: "auto" }}>
                {children}
            </Text>
        </ButtonWrapper>
    );
});

const ButtonWrapper = styled.div<{
    color: any;
    backgroundColor: any;
}>`
    width: 100%;
    height: 47px;
    display: flex;

    color: ${({ color }) => color};
    border: 1px solid ${colors.Qwhite};
    border-radius: 10px;
    background-color: ${({ backgroundColor }) => backgroundColor};
`;

export default Button;
