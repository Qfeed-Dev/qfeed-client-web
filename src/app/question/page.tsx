"use client";
import styled from "styled-components";
import ProfileTitle from "src/pages-edit/question/ProfileTitle";
import Question from "src/pages-edit/question/Question";
import Spacing from "src/components/Spacing";
import BackTitle from "src/components/Title/BackTitle";
import { useEffect, useState } from "react";
import Image from "src/components/Image";
import { useSearchParams } from "next/navigation";
import { useGetQuestionsId } from "src/hooks/home/useGetQuestionId";
import VoteButton from "src/components/Button/VoteButton";
import { postQuestionsIdChoices } from "src/apis/questions";
import { useUserQuery } from "src/hooks/account/useUserQuery";

export default function Page() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    const { data: questionData, isLoading } = useGetQuestionsId({
        questionId: id
    });
    console.log(questionData);
    const { user } = useUserQuery();

    // choices에 본인이 있는지 확인
    const checkName = (el: any) => {
        if (el?.user?.name === user?.name) {
            return true;
        }
    };
    // 어떤 선택을 했는지
    const checkSelected = (el: any) => {
        if (el?.user?.name === user?.name) {
            return el?.value;
        }
    };

    const [typeNum, setTypeNum] = useState(
        questionData?.choices.some(checkName) ? 2 : 0
    );
    const [selected, setSelected] = useState<number>(
        Number(questionData?.choices.some(checkSelected))
    );
    const best = 0;

    const clickChoice = (idx: any, value: number) => {
        postQuestionsIdChoices(questionData?.id, { value });
        setSelected(idx);
        setTypeNum(1);
        setTimeout(() => {
            setTypeNum(2);
        }, 3000);
    };

    useEffect(() => {
        setTypeNum(questionData?.choices.some(checkName) ? 2 : 0);
        setSelected(Number(questionData?.choices.some(checkSelected)));
    }, [questionData]);

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
                                onClick={() => clickChoice(idx, d)}
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
