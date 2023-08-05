"use client";
import { colors } from "styles/theme";
import styled from "styled-components";
import { Text } from "../common/Text";

interface Props {
    placeholder: string;
    size: number;
}

const Textarea = ({ placeholder, size }: Props) => {
    return (
        <TextareaWrapper>
            <TextareaBox placeholder={placeholder} size={size} />
            <TextareaCount>
                <Text typo="Caption2r" color="light_gray2">
                    0/100
                </Text>
            </TextareaCount>
        </TextareaWrapper>
    );
};

const TextareaWrapper = styled.div`
    width: 100%;
    // padding: 10px;
    position: relative;

    // background-color: ${colors.line_white_30};
`;

const TextareaBox = styled.textarea<{ size: number }>`
    width: 100%;
    height: ${({ size }) => size + "px"};
    margin: 0;
    padding: 10px;
    border: 0;
    outline: 0;
    resize: none;

    border-radius: 10px;
    background-color: ${colors.line_white_30};
`;

const TextareaCount = styled.div`
    position: absolute;
    right: -10px;
    bottom: 10px;
`;

export default Textarea;
