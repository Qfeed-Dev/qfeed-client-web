"use client";
import styled from "styled-components";
import ProfileTitle from "src/pages-edit/question/ProfileTitle";
import Question from "src/pages-edit/question/Question";
import Spacing from "src/components/Spacing";
import BackTitle from "src/components/Title/BackTitle";
import { useEffect, useState } from "react";
import Image from "src/components/Image";
import { useGetQuestionsId } from "src/hooks/questions/useGetQuestionId";
import VoteButton from "src/components/Button/VoteButton";
import { postQuestionsIdChoices } from "src/apis/questions";
import { useUserQuery } from "src/hooks/account/useUserQuery";
import useQChoiceMutation from "src/hooks/questions/useQChoiceMutation";
import Loading from "src/components/common/Loading";

export default function Page({ params }: { params: { id: number } }) {
    const { data: questionData, isLoading } = useGetQuestionsId({
        questionId: params.id
    });
    const { user } = useUserQuery();
    const { mutate } = useQChoiceMutation(params.id);

    // choices에 본인이 있는지 확인
    const checkName = (el: any) => {
        if (el?.user?.id === user?.id) {
            return true;
        }
    };

    // 어떤 선택지가 최대값
    const checkBest = () => {
        const choices = questionData?.choiceList;
        let best = [];
        for (let i = 0; i < questionData?.choiceList?.length; i++) {
            const value = questionData?.choices?.filter(
                (data: any, idx: number) => {
                    return data?.value == choices[i];
                }
            );
            best.push(value.length);
        }
        setBest(best);
    };

    const [typeNum, setTypeNum] = useState<any>();
    const [selected, setSelected] = useState<number>(-1);
    const [best, setBest] = useState<number[]>([]);

    const clickChoice = (idx: any, choice: string) => {
        mutate(choice);
        setSelected(idx);
        setTypeNum(1);
        setTimeout(() => {
            setTypeNum(2);
        }, 2000);
    };

    useEffect(() => {
        setTypeNum(
            questionData?.choices.some(checkName) ||
                questionData?.owner?.id === user?.id
                ? 2
                : 0
        );
        const s = questionData?.choices?.filter(
            (data: any) => data?.user?.id === user?.id
        );
        setSelected(s?.length !== 0 ? Number(s?.[0]?.value) : -1);
        checkBest();
    }, [questionData]);

    return isLoading ? (
        <Loading />
    ) : (
        <>
            {questionData?.backgroundImage && (
                <ImageWrapper>
                    <Image
                        type="background"
                        src={questionData?.backgroundImage.split("?")[0]}
                    />
                </ImageWrapper>
            )}

            <QuestionWrapper>
                <BackTitle type="profile" reportType="report">
                    <ProfileTitle data={questionData} />
                </BackTitle>
                <Spacing size={54} />
                <Question title={questionData?.title} />
            </QuestionWrapper>

            <BottomButton>
                <BottomInner>
                    {questionData.choiceList?.map(
                        (choice: string, idx: number) => {
                            return (
                                <VoteButton
                                    key={idx}
                                    idx={idx}
                                    type={
                                        questionData?.backgroundImage !== ""
                                            ? "primary"
                                            : "default"
                                    }
                                    $typeNum={typeNum} // 0 1 2
                                    action={
                                        typeNum === 2 &&
                                        questionData?.choices?.filter(
                                            (data2: any) =>
                                                data2.value ==
                                                questionData?.choiceList[idx]
                                        ).length === Math.max(...best) // best
                                            ? 2
                                            : idx === selected
                                            ? 1
                                            : 0
                                    } // 0 1 2
                                    selected={selected}
                                    onClick={
                                        typeNum === 2
                                            ? () => {}
                                            : () => clickChoice(idx, choice)
                                    }
                                    count={
                                        questionData?.choices?.filter(
                                            (choiceItem: any) =>
                                                choiceItem.value == choice
                                        ).length
                                    }
                                >
                                    {choice}
                                </VoteButton>
                            );
                        }
                    )}
                </BottomInner>
                <Spacing size={52} />
            </BottomButton>
        </>
    );
}

const ImageWrapper = styled.div`
    width: 100vw;
    max-width: 600px;
    height: 100%;

    opacity: 0.3;
    position: absolute;
    top: 0;
`;

const QuestionWrapper = styled.div`
    height: 100%;
    padding: 0 16px;
`;

const BottomButton = styled.div`
    width: 100%;

    position: absolute;
    left: 0;
    bottom: 0;

    background-color: transparent;
`;

const BottomInner = styled.div`
    max-width: 600px;
    margin-top: 20px;
    padding: 0 16px;
    margin: auto;

    display: flex;
    flex-direction: column;
    gap: 14px;
`;
