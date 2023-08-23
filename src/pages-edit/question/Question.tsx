"use client";
import { Text } from "src/components/common/Text";
import { colors } from "styles/theme";
import styled from "styled-components";
import { useSearchParams } from "next/navigation";

export default function Question({ title }: any) {
    const searchParams = useSearchParams();

    return (
        <QuestionWrapper>
            <Text typo="Headline1b" color="light_qwhite">
                {title}
            </Text>
        </QuestionWrapper>
    );
}

const QuestionWrapper = styled.div`
    color: ${colors.light_qwhite};
    text-align: center;
`;
