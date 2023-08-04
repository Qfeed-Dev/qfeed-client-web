"use client";
import { styled } from "styled-components";
import VoteButton from "src/components/Button/VoteButton";
import ProfileTitle from "src/components/pages/question/ProfileTitle";
import Question from "src/components/pages/question/Question";
import SlideLine from "src/components/SlideLine";
import Spacing from "src/components/Spacing";
import BackTitle from "src/components/Title/BackTitle";
import { colors } from "src/constants/colors";
import { useState } from "react";

export default function Page() {
    const [selected, setSelected] = useState<number>(-1);
    const [type, setType] = useState<string>("default");

    return (
        <>
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
                                selected={selected}
                                // action={false}
                                onClick={() => {
                                    if (idx === selected) {
                                        setSelected(-1); // default
                                        setType("default");
                                    } else {
                                        setSelected(idx);
                                        setType("secondary");
                                    }
                                }}
                            >
                                text
                            </VoteButton>
                            // default
                            // secondary
                            // primary
                        );
                    })}
                </BottomInner>
                <Spacing size={52} />
            </BottomButton>
        </>
    );
}

const QuestionWrapper = styled.div`
    height: 100%;
    padding: 0 16px;
`;

const QuestionInner = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 14px 12px;
`;

const BottomButton = styled.div`
    width: 100%;

    position: absolute;
    left: 0;
    bottom: 0;

    background-color: ${colors.Qblack};
`;

const BottomInner = styled.div`
    margin-top: 20px;
    padding: 0 16px;

    display: flex;
    flex-direction: column;
    gap: 14px;
`;
