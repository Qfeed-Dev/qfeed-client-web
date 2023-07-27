"use client";
import { Metadata } from "next";
import { useRouter } from "next/navigation";
import BasicQuestion from "src/components/pages/home/BasicQuestion";
import Filter from "src/components/pages/home/Filter";
import HomeTitle from "src/components/pages/home/HomeTitle";
import QfeedFrame from "src/components/pages/home/QfeedFrame";
import Spacing from "src/components/Spacing";
import { globalValue } from "src/constants/globalValue";
import { Route } from "src/constants/Route";
import { styled } from "styled-components";

// export const metadata: Metadata = {
//   title: "My Page Title",
// };

const HomeDatas = [{}, {}, {}];

export default function Page() {
  const router = useRouter();
  const handleClickBasicQuestion = () => {
    router.push(Route.QuestionFriend());
  };
  const handleClickFrame = () => {
    router.push(Route.Question());
  };

  return (
    <HomeWrapper>
      <HomeTitle />
      <BasicQuestion type="pick-me" />
      <BasicQuestion type="question" onClick={handleClickBasicQuestion} />
      <Spacing size={20} />

      <Filter />
      <Spacing size={14} />

      <FrameWrapper>
        {HomeDatas.map((data: any, idx: number) => {
          return <QfeedFrame key={idx} onClick={handleClickFrame} />;
        })}
      </FrameWrapper>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  height: calc(100vh - ${globalValue.bottomSheetHeight}px);
  padding: 0 16px;
`;

const FrameWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px 12px;
`;
