"use client";
import { useState } from "react";
import Button from "src/components/Button";
import Input from "src/components/Input";
import Friend from "src/components/pages/question/Friend";
import Question from "src/components/pages/question/Question";
import SlideLine from "src/components/SlideLine";
import Spacing from "src/components/Spacing";
import BackTitle from "src/components/Title/BackTitle";
import { colors } from "src/constants/colors";
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
    {}
];

export default function Page() {
    const COUNT = 10;
    const [currentIdx, setCurrentIdx] = useState<number>(0);
    const [percentage, setPercentage] = useState([
        (currentIdx / COUNT) * 100,
        ((currentIdx + 1) / COUNT) * 100
    ]);

    const clickButton = () => {
        let newPercentage = percentage;
        const newCurrentIdx = currentIdx + 1;
        newPercentage[0] = (newCurrentIdx / COUNT) * 100;
        newPercentage[1] = ((newCurrentIdx + 1) / COUNT) * 100;
        setCurrentIdx(newCurrentIdx);
        setPercentage(newPercentage);
    };

    return (
        <>
            <QuestionWrapper>
                <BackTitle
                    type="slide"
                    currentIdx={currentIdx}
                    setCurrentIdx={setCurrentIdx}
                    count={COUNT}
                    reportType="reportFriend"
                />

                <SlideLine percentage={percentage} />
                <Spacing size={50} />
                <Question />
                <Spacing size={38} />

                <Input type="question-friend" />
                <Spacing size={16} />

                <FriendWrapper>
                    {QuestionDatas.map((data: any, idx: number) => {
                        return <Friend key={idx} idx={idx} />;
                    })}
                </FriendWrapper>
                <Spacing size={111 + 20} />
            </QuestionWrapper>

            <BottomButton>
                <BottomInner>
                    <Button type="secondary">넘기기</Button>
                    <Button type="primary" onClick={clickButton}>
                        보내기
                    </Button>
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
