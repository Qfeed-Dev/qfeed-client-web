"use client";
import styled from "styled-components";
import VoteButton from "src/components/Button/VoteButton";
import ProfileTitle from "src/components/pages/question/ProfileTitle";
import Question from "src/components/pages/question/Question";
import SlideLine from "src/components/SlideLine";
import Spacing from "src/components/Spacing";
import BackTitle from "src/components/Title/BackTitle";
import { useState } from "react";
import Image from "src/components/Image";

export default function Page() {
    const [selected, setSelected] = useState<number>(-1);
    const [type, setType] = useState<string>("default");
    // const imageUrl = "https://i.ibb.co/0Z6FNN7/60pt.png";
    const imageUrl = null;

    return (
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

                {/* <SlideLine /> */}
                <Spacing size={4} />

                <Spacing size={50} />

                <Question />
            </QuestionWrapper>

            <BottomButton>
                <BottomInner>
                    {["", "", ""].map((data: any, idx: number) => {
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
