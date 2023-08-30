"use client";
import { forwardRef } from "react";
import { colors, KeyOfColor } from "styles/theme";
import styled from "styled-components";
import { match } from "ts-pattern";
import { Text } from "../common/Text";

interface Props {
    onClick?: () => void;
    type?: "primary" | "secondary" | "default";
    backgroundColor?: any;
    children?: any;
}

const Button = forwardRef(function Button(
    {
        children,
        onClick,
        type = "primary",
        backgroundColor = "light_qblack",
        ...props
    }: Props,
    ref
) {
    return (
        <ButtonWrapper
            onClick={onClick}
            color={match(type)
                .with("primary", () => "light_qblack")
                .with("secondary", () => "light_qwhite")
                .otherwise(() => "light_qblack")}
            backgroundColor={match(type)
                .with("primary", () => "light_qwhite")
                .with("secondary", () => "light_qblack")
                .otherwise(() => backgroundColor)}
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

    border: 1px solid ${colors.light_qwhite};
    border-radius: 10px;
    color: ${({ color }) => colors[color]};
    background-color: ${({ backgroundColor }) => colors[backgroundColor]};
`;

export default Button;
