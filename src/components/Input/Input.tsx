"use client";
import { colors, repeatQuestionColor, typo } from "styles/theme";
import styled, { css } from "styled-components";
import { match } from "ts-pattern";
import { Text } from "../common/Text";
import Icon from "../Icon";

interface Props {
    type: "question-friend" | "add-question";
}

const Input = ({ type = "question-friend", ...props }: any) => {
    return (
        <InputWrapper
            radius={match(type)
                .with("question-friend", () => 48)
                .with("add-question", () => 10)
                .otherwise(() => 48)}
            backgroundColor={match(type)
                .with("question-friend", () => colors.light_gray3)
                .with(
                    "add-question",
                    () => repeatQuestionColor[5 - (props.idx % 6)]
                )
                .otherwise(() => () => colors.light_gray3)}
        >
            <InputInner>
                <InputBox
                    placeholder="내 친구의 이름을 검색해보세요."
                    color={match(type)
                        .with("question-friend", () => colors.light_qwhite)
                        .with("add-question", () => colors.light_qblack)
                        .otherwise(() => colors.light_qwhite)}
                    placeholderColor={match(type)
                        .with("question-friend", () => colors.light_gray2)
                        .with("add-question", () => colors.light_qblack)
                        .otherwise(() => colors.light_qwhite)}
                    backgroundColor={match(type)
                        .with("question-friend", () => colors.light_gray3)
                        .with(
                            "add-question",
                            () => repeatQuestionColor[5 - (props.idx % 6)]
                        )
                        .otherwise(() => colors.light_qwhite)}
                />
                <div style={{ display: "flex", margin: "auto" }}>
                    {type === "add-question" && (
                        <Text typo="Caption2r" color="light_qblack">
                            0/20
                        </Text>
                    )}
                    <Icon icon="Search" />
                </div>
            </InputInner>
        </InputWrapper>
    );
};

const InputWrapper = styled.div<{ radius: number; backgroundColor: any }>`
    width: 100%;
    height: 48px;

    display: flex;
    border-radius: ${({ radius }) => radius}px;
    background-color: ${({ backgroundColor }) => backgroundColor};
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
    placeholderColor: any;
    backgroundColor: any;
}>`
    width: 100%;
    margin: 0;
    padding: 0;

    outline: 0;
    border: 0;
    color: ${({ color }) => color};
    background-color: ${({ backgroundColor }) => backgroundColor};

    &::placeholder {
        color: ${({ placeholderColor }) => placeholderColor};
        ${css`
            ${typo.Subtitle1r}
        `}
    }

    ${css`
        ${typo.Subtitle1b}
    `}
`;

export default Input;
