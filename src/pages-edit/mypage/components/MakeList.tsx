"use client";

import styled from "styled-components";
import StackGrid from "react-stack-grid";

import useDisplaySize from "src/hooks/useDisplaySize";
import { useGetQuestions } from "src/hooks/home/useGetQuestions";

import Text from "src/components/common/Text";
import QfeedFrame from "src/pages-edit/home/components/QfeedFrame";

import { globalValue } from "src/constants/globalValue";

export default function MakeList() {
    const { data, isLoading } = useGetQuestions();
    const { width } = useDisplaySize();

    return isLoading ? (
        <div>로딩중...</div>
    ) : (
        <QfeedWrapper>
            <StackGrid
                columnWidth={Math.floor((width - 45) / 2)}
                gutterWidth={12}
                gutterHeight={14}
            >
                {data.count ? (
                    data.data.map((data: any, idx: number) => {
                        return <QfeedFrame key={idx} idx={idx} data={data} />;
                    })
                ) : (
                    <Text typo="Subtitle1r">아직 만든 큐피드가 없어요</Text>
                )}
            </StackGrid>
        </QfeedWrapper>
    );
}

const QfeedWrapper = styled.div`
    width: 100%;
    max-width: 600px;
    height: calc(100% - ${globalValue.bottomSheetHeight});

    margin: 0 auto;
    position: relative;
`;
