"use client";
import NewAlarm from "src/pages-edit/alarm/NewAlarm";
import Spacing from "src/components/Spacing";
import BackTitle from "src/components/Title/BackTitle";
import styled from "styled-components";
import { colors } from "styles/theme";

const AlarmDatas = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

export default function Page() {
    return (
        <>
            <Spacing size={50} />
            <TitleWrapper>
                <BackTitle type="default" text="알림 페이지" />
            </TitleWrapper>
            <AlarmWrapper>
                <Spacing size={8} />
                {AlarmDatas.map((data: any, idx: number) => {
                    return <NewAlarm key={idx} />;
                })}
            </AlarmWrapper>
        </>
    );
}

const TitleWrapper = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    background-color: ${colors.light_qblack};
`;

const AlarmWrapper = styled.div`
    height: 100%;
    // padding: 0 16px;
`;
