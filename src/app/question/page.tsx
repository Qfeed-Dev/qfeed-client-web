"use client";
import styled from "styled-components";
import VoteButton from "src/components/Button/VoteButton";
import ProfileTitle from "src/pages-edit/question/ProfileTitle";
import Question from "src/pages-edit/question/Question";
import Spacing from "src/components/Spacing";
import BackTitle from "src/components/Title/BackTitle";
import { useState } from "react";
import Image from "src/components/Image";
import { useGetQuestionsId } from "src/hooks/home/useGetQuestionId";
import { useSearchParams } from "next/navigation";

export default function Page() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    const { data, isLoading } = useGetQuestionsId({ id });
    console.log(data);
    const imageUrl = null;
    // data?.backgroundImage;

    const [selected, setSelected] = useState<number>(-1);
    const [type, setType] = useState<string>(imageUrl ? "primary" : "default");

    return isLoading ? undefined : (
        <>
            {imageUrl && (
                <ImageWrapper>
                    <Image type="background" src={imageUrl} />
                </ImageWrapper>
            )}

            <QuestionWrapper>
                <BackTitle type="profile" reportType="report">
                    <ProfileTitle />
                </BackTitle>
                <Spacing size={54} />
                <Question />
            </QuestionWrapper>

            <BottomButton>
                <BottomInner>
                    {data?.info?.choiceList?.map((d: any, idx: number) => {
                        return (
                            <VoteButton
                                key={idx}
                                idx={idx}
                                type={type}
                                top={idx === 0}
                                selected={selected}
                                action={imageUrl}
                                onClick={() => {
                                    if (idx === selected) {
                                        setSelected(-1); // default
                                    } else {
                                        setSelected(idx);
                                    }
                                }}
                            >
                                text
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
