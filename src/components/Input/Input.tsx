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
}

const Input = ({
    type = "question-friend",
    setValue,
    value,
    limit = 20,
    onIconPress = (_: string) => {},
    ...props
}: Props) => {
    const inputRef = useRef<HTMLInputElement>();
    const [displayedValue, setDisplayedValue] = useState("");

    const handleInputChange = () => {
        const inputValue = inputRef.current?.value;
        if (inputValue) setDisplayedValue(inputValue);
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const inputValue = inputRef.current?.value;
        if (inputValue) onIconPress(inputValue);
        setDisplayedValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputWrapper
                radius={match(type)
                    .with("question-friend", () => 48)
                    .otherwise(() => 10)}
                backgroundColor={match(type)
                    .with("question-friend", () => colors.light_gray3)
                    .with(
                        "add-question",
                        () => repeatQuestionColor[5 - (props?.idx ?? 0 % 6)]
                    )
                    .with("add-question-image", () => colors.line_white_70)
                    .otherwise(() => () => colors.light_gray3)}
            >
                <InputInner>
                    <InputBox
                        type="text"
                        // @ts-ignore-next-line
                        ref={inputRef ?? null}
                        onChange={handleInputChange}
                        value={displayedValue.length ? displayedValue : value}
                        placeholder={match(type)
                            .with(
                                "question-friend",
                                () => "내 친구의 이름을 검색해보세요."
                            )
                            .with("chatting-send", () => "메세지 보내보세요")
                            .otherwise(() => `선택지${props.count}`)}
                        color={match(type)
                            .with("question-friend", () => colors.light_qwhite)
                            .otherwise(() => colors.light_qblack)}
                        placeholderColor={match(type)
                            .with("question-friend", () => colors.light_gray2)
                            .otherwise(() => colors.light_qblack)}
                        backgroundColor={match(type)
                            .with("question-friend", () => colors.light_gray3)
                            .with(
                                "add-question",
                                () =>
                                    repeatQuestionColor[
                                        5 - (props?.idx ?? 0 % 6)
                                    ]
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
                        {type !== "question-friend" && limit !== 0 && (
                            <Text
                                typo="Caption2r"
                                color="light_qblack"
                                style={{ marginRight: 16 }}
                            >
                                {`${displayedValue.length}/${limit}`}
                            </Text>
                        )}
                        <button style={{ zIndex: 10 }} type="submit">
                            {type === "question-friend" ? (
                                <Icon icon="Search" />
                            ) : type === "chatting-send" ? (
                                <Icon icon="Message" />
                            ) : (
                                <Icon
                                    icon="Trash"
                                    color="light_qblack"
                                    fill="light_qblack"
                                />
                            )}
                        </button>
                    </div>
                </InputInner>
            </InputWrapper>
        </form>
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
