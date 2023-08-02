"use client";
import { styled } from "styled-components";
import Flex from "src/components/common/Flex";
import Text from "../common/Text";
import { colors } from "styles/theme";

export interface InputProps {
    label?: string;
    value: string;
    placeholder?: string;
    onChange: any;
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
                />
            </InputWrapper>
        </Flex>
    );
};

const InputWrapper = styled.div`
    width: 100%;
    padding: 1rem 0;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    border-bottom: 1px solid ${colors.light_gray3};
`;

const Input = styled.input`
    color: ${colors.light_qwhite};
`;

export default InputLine;
