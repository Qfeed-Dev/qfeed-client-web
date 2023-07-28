"use client";
import Button from "src/components/Button";
import Input from "src/components/Input";
import Friend from "src/components/pages/question/Friend";
import Question from "src/components/pages/question/Question";
import SlideLine from "src/components/SlideLine";
import Spacing from "src/components/Spacing";
import BackTitle from "src/components/Title/BackTitle";
import { colors } from "src/constants/colors";
import { globalValue } from "src/constants/globalValue";
import { styled } from "styled-components";

const QuestionDatas = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];

export default function Page() {
  return (
    <>
      <QuestionWrapper>
        <BackTitle />

        <SlideLine />
        <Spacing size={50} />
        <Question />
        <Spacing size={38} />

        <Input type="question-friend" />
        <Spacing size={16} />

        <FriendWrapper>
          {QuestionDatas.map((data: any, idx: number) => {
            return <Friend key={idx} />;
          })}
        </FriendWrapper>
        <Spacing size={111 + 20} />
      </QuestionWrapper>

      <BottomButton>
        <BottomInner>
          <Button type="secondary">넘기기</Button>
          <Button type="primary">보내기</Button>
        </BottomInner>
      </BottomButton>
    </>
  );
}

const QuestionWrapper = styled.div`
  height: 100%;
  padding: 0 16px;
`;

const FriendWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 14px 12px;
`;

const BottomButton = styled.div`
  width: 100%;
  height: 131px;

  position: absolute;
  left: 0;
  bottom: 0;

  background-color: ${colors.Qblack};
`;

const BottomInner = styled.div`
  margin-top: 20px;
  padding: 0 16px;
  display: flex;
  gap: 14px;
`;
