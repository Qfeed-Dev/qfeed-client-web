"use client";
import { colors } from "src/constants/colors";
import styled from "styled-components";

interface Props {
    placeholder: string;
    size: number;
}

const Textarea = ({ placeholder, size }: Props) => {
    return (
        <TextareaWrapper>
            <TextareaBox placeholder={placeholder} size={size} />
            <TextareaCount>0/100</TextareaCount>
        </TextareaWrapper>
    );
};

const TextareaWrapper = styled.div`
    width: 100%;
    padding: 10px;
    position: relative;
    background-color: ${colors.Qwhite};
`;

const TextareaBox = styled.textarea<{ size: number }>`
    width: 100%;
    height: ${({ size }) => size + "px"};
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
`;

const TextareaCount = styled.div`
    position: absolute;
    right: 10px;
    bottom: 10px;
    background-color: ${colors.Qwhite};
`;

export default Textarea;
