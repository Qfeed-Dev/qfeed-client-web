"use client";
import { KeyOfColor, colors } from "styles/theme";
import styled from "styled-components";
import { Text } from "../common/Text";
import { match } from "ts-pattern";

interface Props {
    type?: any;
    placeholder?: any;
    size?: any;
    value?: any;
    setValue?: Function;
}

const Textarea = ({
    type = "question-friend",
    placeholder,
    size,
    value,
    setValue
}: Props) => {
    return (
        <TextareaWrapper>
            <TextareaBox
                value={value}
                placeholder={placeholder}
                size={size}
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
                backgroundColor={match(type)
                    .with("question-friend", () => colors.line_black_5)
                    .with("add-question", () => colors.line_white_5)
                    .with("add-question-image", () => colors.line_white_50)
                    .otherwise(() => colors.line_black_5)}
                onChange={setValue}
            />
            <TextareaCount>
                <Text
                    typo="Caption2r"
                    color={
                        type !== "add-question-image"
                            ? "light_gray2"
                            : "light_qblack"
                    }
                >
                    0/100
                </Text>
            </TextareaCount>
        </TextareaWrapper>
    );
};

const TextareaWrapper = styled.div`
    width: 100%;
    position: relative;
`;

const TextareaBox = styled.textarea<{
    size: any;
    color: string;
    placeholderColor: string;
    backgroundColor: string;
    onChange?: any;
}>`
    width: 100%;
    height: ${({ size }) => size + "px"};
    margin: 0;
    padding: 16px;
    border: 0;
    outline: 0;
    resize: none;

    border-radius: 10px;
    color: ${({ color }) => color};
    background-color: ${({ backgroundColor }) => backgroundColor};

    &::placeholder {
        color: ${({ placeholderColor }) => placeholderColor};
    }
`;

const TextareaCount = styled.div`
    position: absolute;
    right: 16px;
    bottom: 10px;
`;

export default Textarea;
