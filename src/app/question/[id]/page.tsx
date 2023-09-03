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

export default function Page({ params }: { params: { id: number } }) {
    const { data: questionData, isLoading } = useGetQuestionsId({
        questionId: params.id
    });
    const { user } = useUserQuery();
    const { mutate } = useQChoiceMutation(params.id);

    // choices에 본인이 있는지 확인
    const checkName = (el: any) => {
        if (el?.user?.name === user?.name) {
            return true;
        }
    };
    // 어떤 선택을 했는지
    const checkSelected = (el: any) => {
        console.log("A");
        if (el?.user?.name === user?.name) {
            console.log(el?.value);
            return el?.value;
        } else {
            return -1;
        }
    };
    // 어떤 선택지가 최대값
    const checkBest = () => {
        let b = [];
        for (let i = 0; i < questionData?.choiceList?.length; i++) {
            const value = questionData?.choices?.filter(
                (data: any, idx: number) => {
                    return data?.value == i;
                }
            );
            b.push(value.length);
        }
        setBest(b);
    };

    const [typeNum, setTypeNum] = useState<any>();
    const [selected, setSelected] = useState<number>(-1);
    const [best, setBest] = useState<any>([]);

    const clickChoice = (idx: any, choice: string) => {
        mutate(choice);
        setSelected(idx);
        setTypeNum(1);
        setTimeout(() => {
            setTypeNum(2);
        }, 3000);
    };

    useEffect(() => {
        setTypeNum(
            questionData?.choices.some(checkName) ||
                questionData?.owner?.name === user?.name
                ? 2
                : 0
        );
        const s = questionData?.choices?.filter(
            (data: any) => data?.user?.name === user?.name
        );
        setSelected(s?.length !== 0 ? Number(s?.[0]?.value) : -1);
        checkBest();
    }, [questionData]);

    console.log(questionData);

    return isLoading ? undefined : (
        <>
            {questionData?.backgroundImage && (
                <ImageWrapper>
                    <Image
                        type="background"
                        src={questionData?.backgroundImage}
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
                                        questionData?.backgroundImage
                                            ? "primary"
                                            : "default"
                                    } // primary default
                                    typeNum={typeNum} // 0 1 2
                                    action={
                                        typeNum === 2 &&
                                        questionData?.choices?.filter(
                                            (data2: any) => data2.value == idx
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
                                // default
                                // primary, top
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
