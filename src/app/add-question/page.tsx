"use client";
import styled, { css } from "styled-components";
import Spacing from "src/components/Spacing";
import BackTitle from "src/components/Title/BackTitle";
import Textarea from "src/components/Textarea";
import Input from "src/components/Input";
import { colors } from "styles/theme";
import { Text } from "src/components/common/Text";
import QuestionImage from "src/components/Icon/icons/images/QuestionImage";
import Icon from "src/components/Icon";
import { useState } from "react";
import Image from "src/components/Image";
import usePostQuestions from "src/hooks/questions/usePostQuestions";
import { postQuestions } from "src/apis/questions";
import { useRouter } from "next/navigation";
import { Route } from "src/constants/Route";

export default function Page() {
    const router = useRouter();
    const time2 = 0;
    const [image, setImage] = useState("");
    // "https://i.ibb.co/0Z6FNN7/60pt.png"
    const [question, setQuestion] = useState("");
    const [values, setValues] = useState<any>([""]);

    const handleQuestion = (e: any) => {
        setQuestion(e.target.value);
    };
    const handleInput = (e: any, idx: number) => {
        let newValues: any = [];
        for (let i = 0; i < values.length; i++) {
            if (i === idx) newValues.push(e.target.value);
            else newValues.push(values[i]);
        }
        setValues(newValues);
    };

    const clickAddValue = () => {
        setValues([...values, ""]);
    };

    const clickTrash = (idx: number) => {
        if (values.length === 1) return;
        setValues(values.filter((_: any, idx2: number) => idx !== idx2));
    };

    const clickUpload = () => {
        postQuestions({
            Qtype: "personal",
            title: question,
            choiceList: values,
            backgroundImage: image,
            isBlind: false
        });
        router.push(Route.HOME());
    };

    return time2 ? (
        <>
            <BackTitle type="default" />
            <Wrapper>
                <Text typo="Subtitle2r">10가지 질문에 모두 답했군요!</Text>
                <Spacing size={8} />
                <Text typo="Headline1b">
                    앙케이트에 더 답하고 싶다면
                    <br />
                    친구를 초대해봐
                </Text>

                <QuestionImage />

                <Text typo="Caption1r">
                    초대한 친구가 가입하면
                    <br />
                    다음 질문을 바로 받을 수 있어요.
                </Text>
            </Wrapper>

            <BottomButton2>
                <TimeButton>
                    <Text
                        typo="Caption1r"
                        style={{
                            margin: "auto",
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
                        다음 질문 생성 시간까지
                        <Text typo="Headline1b" style={{ marginLeft: 24 }}>
                            {time2}
                        </Text>
                    </Text>
                </TimeButton>
                <Spacing size={16} />
                <CoinButton>
                    <div
                        style={{
                            width: "100%",
                            margin: "auto",
                            padding: "0 16px",
                            display: "flex",
                            justifyContent: "space-between"
                        }}
                    >
                        <div style={{ display: "flex" }}>
                            <Icon
                                icon="Money"
                                color="light_qblack"
                                fill="light_qblack"
                            />
                            <Text
                                typo="Subtitle2b"
                                color="light_qblack"
                                style={{ marginLeft: 8 }}
                            >
                                질문 2개 생성
                            </Text>
                        </div>
                        <Text
                            typo="Subtitle2b"
                            color="light_qblack"
                            style={{ marginLeft: 8 }}
                        >
                            코인
                        </Text>
                    </div>
                </CoinButton>
            </BottomButton2>
        </>
    ) : (
        <>
            {image ? (
                <ImageBackground>
                    <Image type="background" src={image} />
                </ImageBackground>
            ) : null}
            <AddQuestionWrapper>
                <BackTitle type="default" text="질문 올리기" />
                <UploadButton onClick={clickUpload}>
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
                    type={image ? "add-question-image" : "add-question"}
                    placeholder="원하는 질문지를 작성하세요."
                    size={140}
                    value={question}
                    setValue={handleQuestion}
                />
                <Spacing size={60} />

                <InputWrapper>
                    {values.map((data: any, idx: number) => {
                        return (
                            <Input
                                key={idx}
                                idx={idx}
                                type={
                                    image
                                        ? "add-question-image"
                                        : "add-question"
                                }
                                count={idx + 1}
                                value={values[idx]}
                                setValue={(e: any) => handleInput(e, idx)}
                                onIconPress={() => clickTrash(idx)}
                            />
                        );
                    })}
                    {values.length < 6 ? (
                        <PlusButton onClick={clickAddValue}>
                            <div style={{ margin: "auto", display: "flex" }}>
                                <Icon
                                    icon="HomePlus"
                                    width={14}
                                    height={14}
                                    color="light_qblack"
                                    fill="light_qblack"
                                />
                            </div>
                        </PlusButton>
                    ) : null}
                </InputWrapper>
                <Spacing size={92} />
            </AddQuestionWrapper>

            <BottomButton timer={time2}>
                <BottomInner timer={time2}>
                    <Icon icon="Camera" />
                </BottomInner>
            </BottomButton>
        </>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 25px;

    text-align: center;
`;

const BottomButton2 = styled.input`
    width: 100%;
    height: 200px;
    padding: 0 16px;

    position: absolute;
    left: 0;
    bottom: 0;

    background-color: ${colors.light_qblack};
`;

const TimeButton = styled.div`
    width: 100%;
    height: 54px;

    display: flex;

    border-radius: 10px;
    background-color: ${colors.light_gray3};
`;

const CoinButton = styled.div`
    width: 100%;
    height: 52px;

    display: flex;

    border-radius: 10px;
    background-color: ${colors.light_qwhite};
`;

//
const ImageBackground = styled.div`
    width: 100%;
    height: 100%;

    opacity: 0.3;
    position: absolute;
`;
const AddQuestionWrapper = styled.div`
    height: 100%;
    padding: 0 16px;
    position: relative;
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const PlusButton = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    border-radius: 10px;
    background-color: ${colors.light_qwhite};
`;

const BottomButton = styled.div<{ timer: any }>`
    width: 100%;
    height: ${({ timer }) => (timer ? 168 + "px" : 92 + "px")};

    position: absolute;
    left: 0;
    bottom: 0;

    // background-color: ${colors.light_qblack};
`;

const BottomInner = styled.div<{ timer: any }>`
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
