"use client";
import styled, { css } from "styled-components";
import Spacing from "src/components/Spacing";
import BackTitle from "src/components/Title/BackTitle";
import Textarea from "src/components/Textarea";
import Input from "src/components/Input";
import { colors } from "styles/theme";
import { Text } from "src/components/common/Text";
import Flex from "src/components/common/Flex";
import QuestionImage from "src/components/Icon/icons/images/QuestionImage";
import Icon from "src/components/Icon";
import { useCallback, useEffect, useState } from "react";
import Image from "src/components/Image";
import { useRouter } from "next/navigation";
import { Route } from "src/constants/Route";
import usePersonalQMutation from "src/hooks/questions/usePersonalQMutation";
import NavigationTopBack from "src/components/navigations/NavigationTopBack";
import Photo from "src/components/common/Photo";
import usePhotoMutation from "src/hooks/file/usePhotoMutation";
import ButtonFillXSmall from "src/components/buttons/button-fill-xsmall";
import { validArray } from "src/hooks/common/useCheckValidation";
import InputFill from "src/components/inputs/input-fill-search";

export default function Page() {
    const router = useRouter();
    const time2 = 0;
    const [file, setFile] = useState<File | undefined>();
    const [image, setImage] = useState("");
    const [question, setQuestion] = useState("");
    const [values, setValues] = useState<string[]>([""]);
    const [message, setMessage] = useState<boolean>(false);

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
        setMessage(false);
    };

    const clickAddValue = () => {
        setValues([...values, ""]);
    };

    const clickTrash = (del_idx: number) => {
        if (values.length === 1) return;
        setValues((values) =>
            values.filter((value: string, idx: number) => idx !== del_idx)
        );
    };

    const createPersonalQ = usePersonalQMutation();
    const photo = usePhotoMutation();

    const clickUpload = async () => {
        const isValid = validArray(values);
        if (isValid) {
            const url = file
                ? await photo.mutateAsync({
                      appName: "question",
                      file: file
                  })
                : "";
            createPersonalQ.mutate({
                Qtype: "personal",
                title: question,
                choiceList: values,
                backgroundImage: url ? url.presignedUrl : url,
                isBlind: false
            });

            router.push(Route.HOME());
        } else {
            setMessage(true);
        }
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
            <Flex direction="column" style={{ overflow: "hidden" }}>
                {image ? (
                    <ImageBackground>
                        <Image type="background" src={image} />
                    </ImageBackground>
                ) : null}
                <NavigationTopBack
                    title="질문 올리기"
                    rightIcon={
                        <ButtonFillXSmall
                            text="올리기"
                            state="default"
                            onClick={clickUpload}
                        />
                    }
                    transparent={Boolean(image)}
                />
                <Textarea
                    type={image ? "add-question-image" : "add-question"}
                    placeholder="원하는 질문지를 작성하세요."
                    size={140}
                    value={question}
                    setValue={handleQuestion}
                />
                <Spacing size={60} />

                <Flex direction="column" gap={12}>
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
                    {message && (
                        <Text
                            typo="Caption1r"
                            color="light_qwhite"
                            style={{ width: "100%" }}
                        >
                            모든 선택지를 입력하세요!
                        </Text>
                    )}
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
                </Flex>
                <Spacing size={92} />
            </Flex>

            <BottomButton timer={time2}>
                <BottomInner timer={time2}>
                    <Photo setFile={setFile} setImage={setImage} />
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
    top: 0;
    left: 0;

    overflow: hidden;
    pointer-events: none;
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
