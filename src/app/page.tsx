"use client";
import { Metadata } from "next";
import { useRouter } from "next/navigation";
import { styled } from "styled-components";
import BottomNavigation from "src/components/BottomNavigation";
import BasicQuestion from "src/components/pages/home/BasicQuestion";
import Filter from "src/components/pages/home/Filter";
import HomeTitle from "src/components/pages/home/HomeTitle";
import QfeedFrame from "src/components/pages/home/QfeedFrame";
import Spacing from "src/components/Spacing";
import { colors } from "src/constants/colors";
import { globalValue } from "src/constants/globalValue";
import { Route } from "src/constants/Route";

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
  const handleClickPlus = () => {
    router.push(Route.AddQuestion());
  };

  return (
    <>
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

        <PlusButton onClick={handleClickPlus} />
        <Spacing size={68} />
      </HomeWrapper>

      <BottomNavigation />
    </>
  );
}

const HomeWrapper = styled.div`
  height: 100vh;
  padding: 0 16px;
`;

const FrameWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px 12px;
`;

const PlusButton = styled.div`
  width: 60px;
  height: 60px;

  position: absolute;
  right: 16px;
  bottom: 64px;

  border-radius: 50%;
  background-color: ${colors.Qwhite};
  z-index: 999;
`;
