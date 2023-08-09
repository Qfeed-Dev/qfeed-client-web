"use client";
import Spacing from "src/components/Spacing";
import { colors } from "styles/theme";
import styled, { css } from "styled-components";
import { match } from "ts-pattern";
import Text from "src/components/common/Text";

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
                    <Text typo="Headline2b" color="light_qblack">
                        가장 더위를 잘 탈 것 같은 사람은?
                    </Text>

                    <Text typo="Caption1r" color="light_qblack">
                        아직 9문제 남았어요!
                    </Text>

                    {type === "question" && (
                        <BottomButton>
                            <Text
                                typo="Caption1b"
                                color="light_qblack"
                                style={{
                                    padding: "6px 16px",
                                    borderRadius: 5,
                                    backgroundColor: colors.light_qwhite
                                }}
                            >
                                계속하기
                            </Text>
                        </BottomButton>
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

const BottomButton = styled.div`
    display: flex;
`;

export default BasicQuestion;
