"use client";
import { forwardRef } from "react";
import styled from "styled-components";
import { colors, repeatQuestionColor } from "styles/theme";

interface Props {
    idx: number;
    type: "primary" | "default";
    action?: boolean;
    children?: any;
}

const VoteButton = forwardRef(function Button(
    { children, onClick, idx, type = "primary", action = null, ...props }: any,
    ref
) {
    return (
        <VoteButtonWrapper
            onClick={onClick}
            color={
                props.top && !(type === "default")
                    ? action
                        ? colors.light_qblack
                        : colors.light_qwhite
                    : idx === props.selected
                    ? colors.light_qblack
                    : action
                    ? colors.light_qwhite
                    : colors.light_qwhite
            }
            backgroundColor={
                props.top && !(type === "default")
                    ? action
                        ? repeatQuestionColor[idx % 6]
                        : colors.line_white_70
                    : idx === props.selected
                    ? action
                        ? colors.line_white_70
                        : repeatQuestionColor[idx % 6]
                    : action
                    ? colors.line_black_50
                    : colors.light_gray2
            }
        >
            <VoteButtonInner>
                <TextWrapper>{children}</TextWrapper>
                {/* {type === "secondary" && idx === props.selected && (
                    <CheckWrapper>svg</CheckWrapper>
                )} */}
                {type !== "primary" && idx === props.selected && (
                    <CheckWrapper>svg</CheckWrapper>
                )}
                {type === "primary" && <NumberWrapper>Hi</NumberWrapper>}
            </VoteButtonInner>
        </VoteButtonWrapper>
    );
});

const VoteButtonWrapper = styled.div<{ color: any; backgroundColor: any }>`
    width: 100%;
    height: 50px;

    display: flex;

    position: relative;
    color: ${({ color }) => color};
    border-radius: 10px;
    background-color: ${({ backgroundColor }) => backgroundColor};
`;

const VoteButtonInner = styled.div`
    margin: auto 0;
    display: flex;
`;

const CheckWrapper = styled.div`
    // 값 바꿔줌
    position: absolute;
    right: 0;
    transform: translate(0, -50%);
`;

const TextWrapper = styled.div`
    // 값 바꿔줌
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const NumberWrapper = styled.div`
    width: 72px;
    height: 100%;
    line-height: 50px;

    text-align: center;

    position: absolute;
    right: 0;
    transform: translate(0, -50%);

    border-left: 1px solid ${colors.light_qwhite};
`;

export default VoteButton;
