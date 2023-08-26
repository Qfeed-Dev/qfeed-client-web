"use client";
import { colors } from "styles/theme";
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
                    .with("question-friend", () => "light_qblack")
                    .with("add-question", () => "light_qwhite")
                    .with("add-question-image", () => "light_qblack")
                    .otherwise(() => "light_qblack")}
                placeholderColor={match(type)
                    .with("question-friend", () => "light_gray2")
                    .with("add-question", () => "light_gray2")
                    .with("add-question-image", () => "light_qblack")
                    .otherwise(() => "light_qblack")}
                backgroundColor={match(type)
                    .with("question-friend", () => "line_black_5")
                    .with("add-question", () => "line_white_5")
                    .with("add-question-image", () => "line_white_50")
                    .otherwise(() => "line_black_5")}
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
    color: any;
    placeholderColor: any;
    backgroundColor: any;
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
    color: ${({ color }) => colors[color]};
    background-color: ${({ backgroundColor }) => colors[backgroundColor]};

    &::placeholder {
        color: ${({ placeholderColor }) => colors[placeholderColor]};
    }
`;

const TextareaCount = styled.div`
    position: absolute;
    right: 16px;
    bottom: 10px;
`;

export default Textarea;
