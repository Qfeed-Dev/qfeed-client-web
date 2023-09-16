"use client";
import styled from "styled-components";
import Flex from "src/components/common/Flex";
import Text from "../common/Text";
import { colors } from "styles/theme";

export interface InputProps {
    label?: string;
    value: string;
    placeholder?: string;
    onChange: any;
    message?: string;
    isError?: boolean;
    readonly?: boolean;
}

const InputLine = ({ ...props }: InputProps) => {
    return (
        <Flex direction="column" align="start">
            <Text typo="Subtitle1r">{props.label}</Text>
            <InputWrapper>
                <Input
                    value={props.value}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    readOnly={props.readonly}
                    onFocus={(e) => {
                        e.preventDefault();
                    }}
                />
            </InputWrapper>
            {props.value && (
                <Text
                    typo="Caption1r"
                    color={props.isError ? "primary_qred" : "primary_qgreen"}
                >
                    {props.message}
                </Text>
            )}
        </Flex>
    );
};

const InputWrapper = styled.div`
    width: 100%;
    padding: 1rem 0;
    margin-bottom: 0.5rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    border-bottom: 1.5px solid ${colors.light_gray3};
`;

const Input = styled.input`
    width: 80vw;
    color: ${colors.light_qwhite};

    transform: scale(0.85);
    transform-origin: left;
`;

export default InputLine;
