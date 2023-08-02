"use client";
import { styled } from "styled-components";

interface Props {}

const ReportDatas = [
  "스팸",
  "성적 행위",
  "혐오 발언",
  "거짓 정보",
  "폭력",
  "사기",
  "따돌림",
  "자살 자해",
  "지식재산권 침해",
  "기타문제",
];

const Report = ({}: Props) => {
  return (
    <ReportWrapper>
      <ReportTitle>
        <Menu>신고하기</Menu>
      </ReportTitle>
      {ReportDatas.map((data: string, idx: number) => {
        return (
          <ReportSelection key={idx}>
            <Menu>{data}</Menu>
          </ReportSelection>
        );
      })}
    </ReportWrapper>
  );
};

const ReportWrapper = styled.div`
  width: 100%;
`;

const ReportTitle = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
`;

const ReportSelection = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
`;

const Menu = styled.div`
  margin: auto;
  display: flex;
`;

export default Report;
