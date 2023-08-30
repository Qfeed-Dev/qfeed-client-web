"use client";
import { useState } from "react";
import Button from "src/components/Button";
import Input from "src/components/Input";
import Friend from "src/pages-edit/question/Friend";
import Question from "src/pages-edit/question/Question";
import SlideLine from "src/components/SlideLine";
import Spacing from "src/components/Spacing";
import BackTitle from "src/components/Title/BackTitle";
import { colors } from "styles/theme";
import styled from "styled-components";
import FriendImage from "src/components/Icon/icons/images/FriendImage";
import Text from "src/components/common/Text";
import { useRouter } from "next/navigation";
import useGetQuestionFriend from "src/hooks/questions/useGetQuestionFriend";

export default function Page() {
    const router = useRouter();
    const time = 0;

    const { questionFriend } = useGetQuestionFriend();

    const [currentIdx, setCurrentIdx] = useState<number>(0);
    const [percentage, setPercentage] = useState([
        (currentIdx / questionFriend?.count) * 100,
        ((currentIdx + 1) / questionFriend?.count) * 100
    ]);

    if (time)
        return (
            <>
                <BackTitle type="default" />
                <Wrapper>
                    <Text typo="Subtitle2r">10가지 질문에 모두 답했군요!</Text>
                    <Spacing size={8} />
                    <Text typo="Headline1b">
                        앙케이트에 더 답하고 싶다면
                        <br />
                        친구를 초대해봐
                    </Text>

                    <FriendImage />

                    <Text typo="Caption1r">
                        초대한 친구가 가입하면
                        <br />
                        다음 질문을 바로 받을 수 있어요.
                    </Text>
                </Wrapper>

                <BottomButton2>
                    <BottomInner>
                        <Button type="secondary">연락처 동기화</Button>
                        <Button type="primary" onClick={() => {}}>
                            공유하기
                        </Button>
                    </BottomInner>
                </BottomButton2>

                <BottomText>
                    <Text typo="Caption1r" color="light_gray2">
                        <Text
                            typo="Caption1r"
                            color="light_qwhite"
                            style={{ textDecoration: "underline" }}
                        >
                            AXE 개인정보 처리방침
                        </Text>
                        AXE에서 사용자의 연락처는 서버로 안전하게 전송되어
                        친구를 찾는 데에만 사용되며, 임의로 광고나 스팸 문자를
                        보내지 않습니다.
                    </Text>
                </BottomText>
            </>
        );

    const clickButton = () => {
        console.log(currentIdx + 2);
        if (currentIdx + 2 > questionFriend?.count) {
            router.back();
        }
        let newPercentage = percentage;
        const newCurrentIdx = currentIdx + 1;
        newPercentage[0] = (newCurrentIdx / questionFriend?.count) * 100;
        newPercentage[1] = ((newCurrentIdx + 1) / questionFriend?.count) * 100;
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
                    count={questionFriend?.count}
                    reportType="reportFriend"
                />

                <SlideLine percentage={percentage} />
                <Spacing size={50} />
                <Question title={questionFriend?.data?.[currentIdx]?.title} />
                <Spacing size={38} />

                <Input type="question-friend" />
                <Spacing size={16} />

                <FriendWrapper>
                    {questionFriend?.accountFetch?.map(
                        (data: any, idx: number) => {
                            //accountFetch
                            return <Friend key={idx} idx={idx} data={data} />;
                        }
                    )}
                </FriendWrapper>
                <Spacing size={111 + 20} />
            </QuestionWrapper>

            <BottomButton>
                <BottomInner>
                    <Button
                        type="secondary"
                        onClick={() => {
                            clickButton();
                        }}
                    >
                        넘기기
                    </Button>
                    <Button
                        type="primary"
                        onClick={() => {
                            clickButton();
                        }}
                    >
                        보내기
                    </Button>
                </BottomInner>
            </BottomButton>
        </>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 25px;

    text-align: center;
`;

const BottomText = styled.div`
    padding: 0 16px;
    display: flex;
    position: absolute;
    bottom: 30px;
`;

//
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

    background-color: ${colors.light_qblack};
`;

const BottomButton2 = styled.div`
    width: 100%;
    height: 180px;

    position: absolute;
    left: 0;
    bottom: 0;

    background-color: ${colors.light_qblack};
`;

const BottomInner = styled.div`
    max-width: 600px;
    margin: auto;
    margin-top: 20px;
    padding: 0 16px;

    display: flex;
    gap: 14px;
`;
