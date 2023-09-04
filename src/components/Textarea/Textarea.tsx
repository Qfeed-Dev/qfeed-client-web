"use client";
import { KeyOfColor, colors } from "styles/theme";
import styled from "styled-components";
import { Text } from "../common/Text";
import { match } from "ts-pattern";
import { ChangeEvent, useState } from "react";

interface Props {
    type?: any;
    placeholder?: any;
    size?: any;
    value?: any;
    setValue?: Function;
    limit?: number;
}

const Textarea = ({
    type = "question-friend",
    placeholder,
    size,
    value,
    limit = 100,
    setValue
}: Props) => {
    const [count, setCount] = useState(0);

    const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setCount(event.target.value.length);
        if (setValue) setValue(event);
    };

    return (
        <TextareaWrapper
            size={size}
            backgroundColor={match(type)
                .with("question-friend", () => colors.line_black_5)
                .with("add-question", () => colors.line_white_5)
                .with("add-question-image", () => colors.line_white_50)
                .otherwise(() => colors.line_black_5)}
        >
            <TextareaBox
                value={value}
                placeholder={placeholder}
                onChange={handleOnChange}
                maxLength={limit}
                color={match(type)
                    .with("question-friend", () => colors.light_qblack)
                    .with("add-question", () => colors.light_qwhite)
                    .with("add-question-image", () => colors.light_qblack)
                    .otherwise(() => colors.light_qblack)}
                placeholderColor={match(type)
                    .with("question-friend", () => colors.light_gray2)
                    .with("add-question", () => colors.light_gray2)
                    .with("add-question-image", () => colors.light_qblack)
                    .otherwise(() => colors.light_qblack)}
            />
            <TextareaCount>
                {count !== 0 && (
                    <Text
                        typo="Caption2r"
                        color={
                            count === limit
                                ? "primary_qred"
                                : type !== "add-question-image"
                                ? "light_gray2"
                                : "light_qblack"
                        }
                    >
                        {count} / {limit}
                    </Text>
                )}
            </TextareaCount>
        </TextareaWrapper>
    );
};

const TextareaWrapper = styled.div<{
    size: any;
    backgroundColor: string;
    onChange?: any;
}>`
    width: 100%;
    position: relative;

    width: 100%;
    height: ${({ size }) => size + "px"};
    margin: 0;
    padding: 16px;
    border: 0;
    outline: 0;
    resize: none;

    border-radius: 10px;
    background-color: ${({ backgroundColor }) => backgroundColor};
`;

const TextareaBox = styled.textarea<{
    placeholderColor: string;
    color: string;
}>`
    width: 104vw;
    height: 120%;
    &::placeholder {
        color: ${({ placeholderColor }) => placeholderColor};
    }
    color: ${({ color }) => color};

    transform: scale(0.8);
    transform-origin: left top;

    background: transparent;
    border: 0;
    outline: 0;
`;

const TextareaCount = styled.div`
    position: absolute;
    right: 16px;
    bottom: 10px;
`;

export default Textarea;
