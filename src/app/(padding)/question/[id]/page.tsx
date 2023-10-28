"use client";
import styled from "styled-components";
import Question from "src/pages-edit/question/Question";
import Flex from "src/components/common/Flex";
import Text from "src/components/common/Text";
import NavigationTopBack from "src/components/navigations/NavigationTopBack";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "src/hooks/useReduxHooks";
import {
    changeAction,
    changeVisibleType
} from "src/reducer/slices/bottomSheet/bottomSheetSlice";
import Image from "src/components/Image";

import { useGetQuestionsId } from "src/hooks/questions/useGetQuestionId";
import VoteButton from "src/components/Button/VoteButton";
import { useUserQuery } from "src/hooks/account/useUserQuery";
import useQChoiceMutation from "src/hooks/questions/useQChoiceMutation";
import useDeleteQuestionMutation from "src/hooks/questions/useDeleteQuestionMutation";
import Loading from "src/components/common/Loading";
import Icon from "src/components/Icon";

export default function Page({ params }: { params: { id: number } }) {
    const { data: questionData, isLoading } = useGetQuestionsId({
        questionId: params.id
    });

    const user = useUserQuery();
    const { mutate } = useQChoiceMutation(params.id);
    const { deleteQMutation } = useDeleteQuestionMutation();
    const dispatch = useAppDispatch();

    const router = useRouter();

    // choices에 본인이 있는지 확인
    const checkName = (el: any) => {
        if (el?.user?.id === user?.user?.id) {
            return true;
        }
    };

    // 어떤 선택지가 최대값
    const checkBest = () => {
        const choices = questionData?.choiceList;
        let best = [];
        for (
            let i = 0;
            i <
            (questionData?.choiceList?.length
                ? questionData?.choiceList?.length
                : 0);
            i++
        ) {
            const value = questionData?.choices?.filter(
                (data: any, idx: number) => {
                    return choices && data?.value == choices[i];
                }
            );
            value && best.push(value.length);
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
                questionData?.owner?.id === user?.user?.id
                ? 2
                : 0
        );
        const s = questionData?.choices?.filter(
            (data: any) => data?.user?.id === user?.user?.id
        );
        setSelected(s?.length !== 0 ? Number(s?.[0]?.value) : -1);
        checkBest();
    }, [questionData]);

    return isLoading || user.isLoading ? (
        <Loading />
    ) : (
        <Flex height="100%" direction="column">
            <NavigationTopBack
                leftIcon={
                    <Flex gap={8}>
                        <Image
                            type="default"
                            size={35}
                            src={
                                questionData?.owner?.profileImage
                                    ? questionData?.owner?.profileImage
                                    : ""
                            }
                        />
                        <Text typo="Subtitle1b">
                            {questionData?.owner?.nickname}
                        </Text>
                    </Flex>
                }
                rightIcon={
                    <Flex width="auto" gap={16}>
                        <Text typo="Subtitle1r">
                            {questionData?.choices?.length}명 응답
                        </Text>
                        {questionData?.owner?.id === user?.user?.id ? (
                            <Icon
                                icon="Trash"
                                onClick={() => {
                                    questionData &&
                                        deleteQMutation.mutate(questionData.id);
                                    router.back();
                                }}
                            />
                        ) : (
                            <Icon
                                icon="DotsHoriz"
                                onClick={() =>
                                    dispatch(
                                        changeVisibleType({
                                            type: "bottomSheet",
                                            value: [
                                                1,
                                                "reportBlock",
                                                questionData?.owner?.id
                                            ]
                                        })
                                    )
                                }
                            />
                        )}
                    </Flex>
                }
                transparent
            />
            {questionData?.backgroundImage && (
                <ImageWrapper>
                    <Image
                        type="background"
                        src={questionData?.backgroundImage.split("?")[0]}
                    />
                </ImageWrapper>
            )}
            <Flex height="100%" direction="column" justify="space-between">
                <QuestionWrapper height="100%">
                    <Question title={questionData?.title} />
                </QuestionWrapper>
                {questionData && (
                    <BottomButton width="100%" direction="column" gap={12}>
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
                                                    questionData?.choiceList[
                                                        idx
                                                    ]
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
                    </BottomButton>
                )}
            </Flex>
        </Flex>
    );
}

const ImageWrapper = styled.div`
    width: 100vw;
    max-width: 600px;
    height: 100%;

    opacity: 0.3;
    position: fixed;
    top: 0;
    left: 0;
`;

const QuestionWrapper = styled(Flex)`
    padding: 0 1rem;
`;

const BottomButton = styled(Flex)``;
