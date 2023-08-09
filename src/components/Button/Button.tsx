"use client";
import { forwardRef } from "react";
import { colors } from "styles/theme";
import styled from "styled-components";
import { match } from "ts-pattern";
import { Text } from "../common/Text";

interface Props {
    onClick?: () => void;
    type: "primary" | "secondary" | "default";
    children?: any;
}

const Button = forwardRef(function Button(
    { children, onClick, type = "primary", ...props }: Props,
    ref
) {
    return (
        <ButtonWrapper
            onClick={onClick}
            color={match(type)
                .with("primary", () => colors.light_qblack)
                .with("secondary", () => colors.light_qwhite)
                .otherwise(() => colors.light_qblack)}
            backgroundColor={match(type)
                .with("primary", () => colors.light_qwhite)
                .with("secondary", () => colors.light_qblack)
                .otherwise(() => colors.light_qwhite)}
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
    border: 1px solid ${colors.light_qwhite};
    border-radius: 10px;
    background-color: ${({ backgroundColor }) => backgroundColor};
`;

export default Button;
