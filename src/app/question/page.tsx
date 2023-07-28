"use client";
import { styled } from "styled-components";
import VoteButton from "src/components/Button/VoteButton";
import ProfileTitle from "src/components/pages/question/ProfileTitle";
import Question from "src/components/pages/question/Question";
import SlideLine from "src/components/SlideLine";
import Spacing from "src/components/Spacing";
import BackTitle from "src/components/Title/BackTitle";
import { colors } from "src/constants/colors";

export default function Page() {
  return (
    <>
      <QuestionWrapper>
        <BackTitle />

        <SlideLine />
        <Spacing size={4} />

        <ProfileTitle />
        <Spacing size={50} />

        <Question />
      </QuestionWrapper>

      <BottomButton>
        <BottomInner>
          <VoteButton type="default" action={true}>
            text
          </VoteButton>
          <VoteButton type="default">text</VoteButton>
          <VoteButton type="primary">text</VoteButton>
        </BottomInner>
        <Spacing size={52} />
      </BottomButton>
    </>
  );
}

const QuestionWrapper = styled.div`
  height: 100%;
  padding: 0 16px;
`;

const QuestionInner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 14px 12px;
`;

const BottomButton = styled.div`
  width: 100%;

  position: absolute;
  left: 0;
  bottom: 0;

  background-color: ${colors.Qblack};
`;

const BottomInner = styled.div`
  margin-top: 20px;
  padding: 0 16px;

  display: flex;
  flex-direction: column;
  gap: 14px;
`;
