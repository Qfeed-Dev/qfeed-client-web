"use client";
import { colors, repeatQuestionColor, typo } from "styles/theme";
import styled, { css } from "styled-components";
import { match } from "ts-pattern";
import { Text } from "../common/Text";
import Icon from "../Icon";
import { FormEventHandler, useRef, useState } from "react";

interface Props {
    type:
        | "question-friend"
        | "add-question"
        | "add-question-image"
        | "chatting-send";
    setValue?: Function;
    value?: string;
    limit?: number;
    onIconPress?: (value: string) => void;
    count?: number;
    idx?: number;
    lazyDelay: number;
}

const Input = ({
    type = "question-friend",
    value,
    setValue,
    ...props
}: any) => {
    return (
        <InputWrapper
            radius={match(type)
                .with("question-friend", () => 48)
                .otherwise(() => 10)}
            $backgroundColor={match(type)
                .with("question-friend", () => colors.light_gray3)
                .with(
                    "add-question",
                    () => repeatQuestionColor[5 - (props.idx % 6)]
                )
                .with("add-question-image", () => colors.line_white_70)
                .otherwise(() => () => colors.light_gray3)}
        >
            <InputInner>
                <InputBox
                    placeholder={match(type)
                        .with(
                            "question-friend",
                            () => "내 친구의 이름을 검색해보세요."
                        )
                        .otherwise(() => `선택지${props.count}`)}
                    value={value}
                    onChange={setValue}
                    color={match(type)
                        .with("question-friend", () => colors.light_qwhite)
                        .otherwise(() => colors.light_qblack)}
                    $placeholderColor={match(type)
                        .with("question-friend", () => colors.light_gray2)
                        .otherwise(() => colors.light_qblack)}
                    $backgroundColor={match(type)
                        .with("question-friend", () => colors.light_gray3)
                        .with(
                            "add-question",
                            () => repeatQuestionColor[5 - (props.idx % 6)]
                        )
                        .with("add-question-image", () => `transparent`)
                        .otherwise(() => `transparent`)}
                />
                <div
                    style={{
                        display: "flex",
                        margin: "auto",
                        alignItems: "center"
                    }}
                >
                    {/* {type !== "question-friend" && (
                        <Text
                            typo="Caption2r"
                            color="light_qblack"
                            style={{ marginRight: 16 }}
                        >
                            0/20
                        </Text>
                    )} */}
                    {type === "question-friend" ? (
                        <Icon icon="Search" />
                    ) : (
                        <div onClick={props.clickTrash}>
                            <Icon icon="Trash" fill="light_qblack" />
                        </div>
                    )}
                </div>
            </InputInner>
        </InputWrapper>
    );
};

const InputWrapper = styled.div<{ radius: number; $backgroundColor: any }>`
    width: 100%;
    height: 48px;

    display: flex;
    border-radius: ${({ radius }) => radius}px;
    background-color: ${({ $backgroundColor }) => $backgroundColor};
`;

const InputInner = styled.div`
    width: 100%;
    margin: auto 0;
    padding: 0 20px;

    display: flex;
    gap: 8px;
`;

const InputBox = styled.input<{
    color: any;
    $placeholderColor: any;
    $backgroundColor: any;
}>`
    width: 100%;

    color: ${({ color }) => color};
    background-color: ${({ $backgroundColor }) => $backgroundColor};

    &::placeholder {
        color: ${({ $placeholderColor }) => $placeholderColor};
    }

    transform: scale(0.75);
    transform-origin: left;
`;

export default Input;
