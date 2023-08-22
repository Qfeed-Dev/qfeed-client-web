"use client";
import Spacing from "src/components/Spacing";
import { colors } from "styles/theme";
import styled, { css } from "styled-components";
import { match } from "ts-pattern";
import Text from "src/components/common/Text";
import Icon from "src/components/Icon";

interface Props {
    type: "pick-me" | "question";
    onClick?: () => void;
}

const BasicQuestion = ({ type = "pick-me", ...props }: any) => {
    return (
        <>
            <Spacing size={16} />
            <BasicQuestionWrapper
                onClick={props.onClick}
                color={match(type)
                    .with("pick-me", () => colors.light_qwhite)
                    .with("question", () => colors.primary_qred)
                    .otherwise(() => colors.light_qwhite)}
            >
                <BasicQuestionInner>
                    <Text typo="Headline2b" color="light_qblack">
                        {type === "pick-me"
                            ? "나를 선택한 큐피드"
                            : "가장 더위를 잘 탈 것 같은 사람은?"}
                    </Text>

                    <Text typo="Caption1r" color="light_qblack">
                        {type === "pick-me"
                            ? `총 ${props.count}명이 나를 선택했어요!`
                            : `아직 ${props.count}문제 남았어요!`}
                    </Text>

                    {type === "question" && (
                        <BottomButton>
                            <Text
                                typo="Caption1b"
                                color="light_qblack"
                                style={{
                                    padding: "6px 16px",
                                    display: "flex",
                                    borderRadius: 5,
                                    backgroundColor: colors.light_qwhite
                                }}
                            >
                                <span style={{ marginRight: 8 }}>계속하기</span>
                                <span
                                    style={{ margin: "auto", display: "flex" }}
                                >
                                    <Icon
                                        icon="RightArrow"
                                        color="light_qblack"
                                    />
                                </span>
                            </Text>
                        </BottomButton>
                    )}

                    <ImageWrapper>
                        {type === "pick-me" ? (
                            <Icon
                                icon="AngelImage"
                                fill="primary_qgreen"
                                color="primary_qgreen"
                            />
                        ) : (
                            // <></>
                            <Icon
                                icon="WaveImage"
                                fill="light_qblack"
                                color="light_qblack"
                            />
                        )}
                    </ImageWrapper>
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

    position: relative;

    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const BottomButton = styled.div`
    display: flex;
`;

const ImageWrapper = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
`;

export default BasicQuestion;
