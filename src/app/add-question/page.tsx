"use client";
import styled, { css } from "styled-components";
import Spacing from "src/components/Spacing";
import BackTitle from "src/components/Title/BackTitle";
import Textarea from "src/components/Textarea";
import Input from "src/components/Input";
import { useState } from "react";
import Button from "src/components/Button";
import Timer from "src/components/pages/question/Timer";
import { colors } from "styles/theme";
import { Text } from "src/components/common/Text";

const AddQuestionDatas = [{}, {}, {}, {}];

export default function Page() {
    const [timer, setTimer] = useState<boolean>(false);

    return timer ? (
        <>
            <AddQuestionWrapper>
                <BackTitle type="default" text="생성 앙케이트 만들기" />
                <Spacing size={64} />
                <Timer />
                <div>오늘 2번의 질문을 모두 올렸군요!</div>
                <div>20코인 쓰고 질문 생성하기</div>
                <Spacing size={168} />
            </AddQuestionWrapper>

            <BottomButton timer={timer}>
                <BottomInner timer={timer}>
                    <Button type="primary">코인 충전하기</Button>
                    <Button type="primary">코인 충전하기</Button>
                </BottomInner>
            </BottomButton>
        </>
    ) : (
        <>
            <AddQuestionWrapper>
                <BackTitle type="default" text="생성 앙케이트 만들기" />
                <UploadButton>
                    <Text
                        typo="Subtitle1b"
                        color="light_qblack"
                        style={{
                            marginTop: 5,
                            textAlign: "center"
                        }}
                    >
                        올리기
                    </Text>
                </UploadButton>

                <Spacing size={42} />
                <Textarea
                    placeholder="원하는 질문지를 작성하세요."
                    size={140}
                />
                <Spacing size={60} />

                <PlusWrapper>
                    {AddQuestionDatas.map((data: any, idx: number) => {
                        return <Input idx={idx} type="add-question" />;
                    })}
                    <PlusButton />
                </PlusWrapper>
                <Spacing size={92} />
            </AddQuestionWrapper>

            <BottomButton timer={timer}>
                <BottomInner timer={timer}>
                    <div>Hi</div>
                    <div>Hi</div>
                </BottomInner>
            </BottomButton>
        </>
    );
}

const AddQuestionWrapper = styled.div`
    height: 100%;
    padding: 0 16px;
    position: relative;
`;

const PlusWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const PlusButton = styled.div`
    width: 100%;
    height: 50px;

    border-radius: 10px;
    background-color: ${colors.light_qwhite};
`;

const BottomButton = styled.div<{ timer: boolean }>`
    width: 100%;
    height: ${({ timer }) => (timer ? 168 + "px" : 92 + "px")};

    position: absolute;
    left: 0;
    bottom: 0;

    background-color: ${colors.light_qblack};
`;

const BottomInner = styled.div<{ timer: boolean }>`
    max-width: 600px;
    margin: auto;
    margin-top: 20px;
    padding: 0 16px;

    display: flex;
    ${({ timer }) =>
        timer
            ? css`
                  flex-direction: column;
                  gap: 10px;
              `
            : css`
                  justify-content: space-between;
              `}

    color: ${colors.light_qwhite};
`;

const UploadButton = styled.div`
    width: 65px;
    height: 31px;

    position: absolute;
    top: 8px;
    right: 16px;
    align-items: center;

    border-radius: 10px;
    background-color: ${colors.light_qwhite};
`;
