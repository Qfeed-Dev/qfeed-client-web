"use client";
import { Text } from "src/components/common/Text";
import { colors } from "styles/theme";
import styled from "styled-components";
import { useSearchParams } from "next/navigation";

export default function Question() {
    const searchParams = useSearchParams();

    return (
        <QuestionWrapper>
            <Text typo="Headline1b" color="light_qwhite">
                애인에게 가장
                <br />잘 해줄 것 같은 사람은?
            </Text>
        </QuestionWrapper>
    );
}

const QuestionWrapper = styled.div`
    color: ${colors.light_qwhite};
    text-align: center;
`;
