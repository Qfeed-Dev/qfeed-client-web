"use client";
import styled from "styled-components";
import ProfileTitle from "src/pages-edit/question/ProfileTitle";
import Question from "src/pages-edit/question/Question";
import Spacing from "src/components/Spacing";
import BackTitle from "src/components/Title/BackTitle";
import { useState } from "react";
import Image from "src/components/Image";
import { useSearchParams } from "next/navigation";
import { useGetQuestionsId } from "src/hooks/home/useGetQuestionId";
import VoteButton from "src/components/Button/VoteButton";
import { postQuestionsIdChoices } from "src/apis/questions";

export default function Page() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    const { data: questionData, isLoading } = useGetQuestionsId({
        questionId: id
    });
    console.log(questionData);

    const [typeNum, setTypeNum] = useState(2);
    const [selected, setSelected] = useState<number>(0);
    const best = 0;

    const clickChoice = (idx: number) => {
        postQuestionsIdChoices(questionData?.id, { value: idx });
        setSelected(idx);
        setTypeNum(1);
        setTimeout(() => {
            setTypeNum(2);
        }, 3000);
    };

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
                    {questionData?.choiceList?.map((d: any, idx: number) => {
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
                                    typeNum === 2 && idx === best // best
                                        ? 2
                                        : idx === selected
                                        ? 1
                                        : 0
                                } // 0 1 2
                                selected={selected}
                                onClick={() => clickChoice(idx)}
                                count={
                                    questionData?.choices?.filter(
                                        (data2: any) => data2.value == idx
                                    ).length
                                }
                            >
                                {d}
                            </VoteButton>
                            // default
                            // primary, top
                        );
                    })}
                </BottomInner>
                <Spacing size={52} />
            </BottomButton>
        </>
    );
}

const ImageWrapper = styled.div`
    width: 100%;
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
