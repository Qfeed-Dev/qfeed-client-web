"use client";
import Spacing from "src/components/Spacing";
import { colors } from "styles/theme";
import styled from "styled-components";
import { match } from "ts-pattern";

interface Props {
    type: "pick-me" | "question";
    onClick?: () => void;
}

const BasicQuestion = ({ type = "pick-me", ...props }: Props) => {
    return (
        <>
            <Spacing size={16} />
            <BasicQuestionWrapper
                onClick={props.onClick}
                color={match(type)
                    .with("pick-me", () => colors.light_qwhite)
                    .with("question", () => colors.primary_qred)
                    .exhaustive()}
            >
                <BasicQuestionInner>
                    <Menu>
                        <TopText>가장 더위를 잘 탈거 같은 사람은?</TopText>
                    </Menu>

                    <Menu>
                        <MiddleText>아직 9문제 남았어요!</MiddleText>
                    </Menu>

                    {type === "question" && (
                        <Menu>
                            <BottomButton>계속하기</BottomButton>
                        </Menu>
                    )}
                </BasicQuestionInner>
            </BasicQuestionWrapper>
        </>
    );
};

const BasicQuestionWrapper = styled.div<{ color: any }>`
    width: 100%;

    border-radius: 10px;
    background-color: ${({ color }) => color};
`;

const BasicQuestionInner = styled.div`
    padding: 20px;

    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const Menu = styled.div`
    margin: auto 0;
`;

const TopText = styled.div``;

const MiddleText = styled.div``;

const BottomButton = styled.button`
    padding: 6px 16px;

    border: 0;
    border-radius: 5px;
    background-color: ${colors.Qwhite};
`;

export default BasicQuestion;
