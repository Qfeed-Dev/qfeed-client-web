"use client";
import Spacing from "src/components/Spacing";
import { colors } from "styles/theme";
import styled, { css } from "styled-components";

import Text from "src/components/common/Text";
import Icon from "src/components/Icon";
import Loading from "src/components/common/Loading";

import useQsetCursorQuery from "src/hooks/questions/useQsetCursorQuery";
import { useEffect, useState } from "react";
import useQsetMutation from "src/hooks/questions/useQsetMutation";
import { useRouter } from "next/navigation";

interface QuestionProps {
    onClick?: () => void;
}

interface Time {
    hour: string;
    min: string;
    sec: string;
}

const MakeOfficial = (props: QuestionProps) => {
    const router = useRouter();
    const QSet = useQsetCursorQuery();
    const newQSet = useQsetMutation();

    const [endTime, setEndTime] = useState<number | typeof NaN>(NaN);
    const [time, setTime] = useState<Time | undefined>(undefined);

    const createNewEndTime = async () => {
        if (!QSet.isLoading) {
            const qSetCount = QSet.questionCursor?.length;

            const today = new Date();
            const nine = new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                21
            );
            const tomorrow = new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                24
            );

            // 아예 초기진입
            if (!qSetCount) {
                newQSet.mutate();
                setEndTime(NaN);
            }
            // 첫번째 질문 set 끝나고 두번째 질문 set 받기
            else if (
                qSetCount === 1 &&
                QSet.questionCursor &&
                QSet.questionCursor[0].isDone
            ) {
                if (+tomorrow - today.getTime() > 3 * 60 * 60 * 1000) {
                    setEndTime(Date.parse(QSet.questionCursor[0].endAt));
                } else {
                    setEndTime(+nine);
                }
            }
            // 두번째 질문 set 까지 끝남
            else if (
                qSetCount === 2 &&
                QSet.questionCursor &&
                QSet.questionCursor[0].isDone
            ) {
                setEndTime(+nine);
            }
            // 질문 대답하는 중
        }
    };

    const getTime = () => {
        const date = new Date();
        const times = new Date(
            endTime + 3 * 60 * 60 * 1000 + 15 * 60 * 60 * 1000 - +date
        );

        if (times.getDate() <= 1 || times.getFullYear() < 1970) {
            if (!QSet.isLoading && QSet.questionCursor) {
                const qSetCount = QSet.questionCursor?.length;
                qSetCount < 2 && newQSet.mutate();
                setEndTime(NaN);
                return;
            }
        }

        const hours = String(times.getHours()).padStart(2, "0");
        const minutes = String(times.getMinutes()).padStart(2, "0");
        const seconds = String(times.getSeconds()).padStart(2, "0");
        setTime({ hour: hours, min: minutes, sec: seconds });
    };

    useEffect(() => {
        if (!isNaN(endTime)) {
            const interval = setInterval(getTime, 1000);
            return () => clearInterval(interval);
        } else {
            createNewEndTime();
        }
    }, [endTime, QSet.questionCursor]);

    return QSet.isLoading ? (
        <Loading />
    ) : (
        <BasicQuestionWrapper
            onClick={props.onClick}
            color={colors.primary_qgreen}
        >
            {QSet && QSet.questionCursor?.length && (
                <BasicQuestionInner>
                    {QSet.questionCursor[0].isDone ? (
                        <>
                            <Text typo="Caption1r" color="light_qblack">
                                다음 질문까지
                            </Text>
                            <Text typo="Headline2b" color="light_qblack">
                                {time
                                    ? `${time.hour}:${time.min}:${time.sec}`
                                    : "00:00:00"}
                            </Text>
                            <ImageWrapper>
                                <Icon
                                    icon="AngelImage2"
                                    fill="light_qwhite"
                                    color="light_qwhite"
                                />
                            </ImageWrapper>
                        </>
                    ) : (
                        <>
                            <Text typo="Headline2b" color="light_qblack">
                                {QSet.questionCursor[0].currentQ}
                            </Text>
                            <Text typo="Caption1r" color="light_qblack">
                                <span>아직 </span>
                                <span>
                                    {QSet.questionCursor[0].QsetLength -
                                        QSet.questionCursor[0].cursor +
                                        1}
                                    문제 남았어요!
                                </span>
                            </Text>
                            <BottomButton>
                                <Text
                                    typo="Caption1b"
                                    color="light_qblack"
                                    style={{
                                        padding: "6px 16px",
                                        display: "flex",
                                        borderRadius: 5,
                                        backgroundColor: colors.light_qwhite
                                    }}
                                >
                                    <span style={{ marginRight: 8 }}>
                                        계속하기
                                    </span>
                                    <Icon
                                        icon="RightArrow"
                                        color="light_qblack"
                                    />
                                </Text>
                            </BottomButton>
                            <ImageWrapper>
                                <Icon
                                    icon="WaveImage"
                                    fill="light_qblack"
                                    color="light_qblack"
                                />
                            </ImageWrapper>
                        </>
                    )}
                </BasicQuestionInner>
            )}
        </BasicQuestionWrapper>
    );
};

const BasicQuestionWrapper = styled.div<{ color: any }>`
    width: 100%;

    border-radius: 10px;
    background-color: ${({ color }) => color};
`;

const BasicQuestionInner = styled.div`
    padding: 20px;

    position: relative;

    display: flex;
    flex-direction: column;
    gap: 4px;

    overflow: hidden;
`;

const BottomButton = styled.div`
    display: flex;
`;

const ImageWrapper = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
`;

export default MakeOfficial;
