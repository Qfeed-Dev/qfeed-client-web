"use client";
import { forwardRef } from "react";
import styled from "styled-components";
import { colors } from "src/constants/colors";
import Hr from "src/components/Hr";

interface Props {
    type: "primary" | "default";
    action?: boolean;
    children?: any;
}

const VoteButton = forwardRef(function Button(
    { children, type = "primary", action = false, ...props }: Props,
    ref
) {
    return (
        <VoteButtonWrapper>
            <VoteButtonInner>
                <TextWrapper>{children}</TextWrapper>
                {action && <CheckWrapper>svg</CheckWrapper>}
                {type === "primary" && <NumberWrapper>Hi</NumberWrapper>}
            </VoteButtonInner>
        </VoteButtonWrapper>
    );
});

const VoteButtonWrapper = styled.div`
    width: 100%;
    height: 47px;

    display: flex;

    position: relative;
    color: ${colors.Qwhite};
    background-color: ${colors.Gray3};
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
