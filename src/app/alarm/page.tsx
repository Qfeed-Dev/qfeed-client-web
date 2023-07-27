"use client";
import NewAlarm from "src/components/pages/alarm/NewAlarm";
import Spacing from "src/components/Spacing";
import BackTitle from "src/components/Title/BackTitle";
import { styled } from "styled-components";

const AlarmDatas = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

export default function Page() {
  return (
    <AlarmWrapper>
      <BackTitle />

      <Spacing size={36} />
      {AlarmDatas.map((data: any, idx: number) => {
        return <NewAlarm key={idx} />;
      })}
    </AlarmWrapper>
  );
}

const AlarmWrapper = styled.div`
  height: 100vh;
  padding: 0 16px;
`;
