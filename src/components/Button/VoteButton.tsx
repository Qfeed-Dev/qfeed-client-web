"use client";
import { forwardRef } from "react";
import { styled } from "styled-components";
import { colors, repeatQuestionColor } from "styles/theme";

interface Props {
    idx: number;
    type: "primary" | "default";
    action?: boolean;
    children?: any;
}

const VoteButton = forwardRef(function Button(
    {
        children,
        onClick,
        idx,
        type = "primary",
        action = undefined,
        ...props
    }: any,
    ref
) {
    return (
        <VoteButtonWrapper
            onClick={onClick}
            backgroundColor={
                type === "default" || idx === props.selected
                    ? repeatQuestionColor[idx % 6]
                    : colors.light_gray2
            }
        >
            <VoteButtonInner>
                <TextWrapper>{children}</TextWrapper>
                {type === "secondary" && idx === props.selected && (
                    <CheckWrapper>svg</CheckWrapper>
                )}
                {type === "primary" && <NumberWrapper>Hi</NumberWrapper>}
            </VoteButtonInner>
        </VoteButtonWrapper>
    );
});

const VoteButtonWrapper = styled.div<{ backgroundColor: any }>`
    width: 100%;
    height: 50px;

    display: flex;

    position: relative;
    color: ${colors.light_qblack};
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

    border-left: 1px solid ${colors.Qwhite};
`;

export default VoteButton;
