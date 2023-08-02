"use client";
import { colors } from "src/constants/colors";
import styled from "styled-components";

export default function Question() {
    return (
        <QuestionWrapper>
            애인에게 가장
            <br />잘 해줄 것 같은 사람은?
        </QuestionWrapper>
    );
}

const QuestionWrapper = styled.div`
    color: ${colors.Qwhite};
    text-align: center;
`;
