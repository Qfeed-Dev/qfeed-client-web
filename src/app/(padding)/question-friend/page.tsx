"use client";

import useQsetCursorQuery from "src/hooks/questions/useQsetCursorQuery";
import useQsetMutation from "src/hooks/questions/useQsetMutation";
import { useInput } from "src/hooks/common/useInput";
import useFollowingsQuery from "src/hooks/account/useFollowingsQuery";
import { useEffect } from "react";
import usePassQsetMutation from "src/hooks/questions/usePassQsetCursorMutation";

import FriendItem from "src/pages-edit/question/Friend";
import Question from "src/pages-edit/question/Question";
import SlideLine from "src/components/SlideLine";
import Spacing from "src/components/Spacing";
import BackTitle from "src/components/Title/BackTitle";
import { colors, repeatBackgroundColor } from "styles/theme";
import styled from "styled-components";
import FriendImage from "src/components/Icon/icons/images/FriendImage";
import Text from "src/components/common/Text";
import { useRouter } from "next/navigation";

import Loading from "src/components/common/Loading";
import Flex from "src/components/common/Flex";
import ButtonFillMid from "src/components/buttons/button-fill-mid";
import ButtonLineMid from "src/components/buttons/button-line-mid";
import InputFill from "src/components/inputs/input-fill";
import { Friend } from "src/models/account";
import { useAppSelector } from "src/hooks/useReduxHooks";
import ButtonFillXSmall from "src/components/buttons/button-fill-xsmall";

export default function Page() {
    const router = useRouter();

    const { questionCursor, isLoading } = useQsetCursorQuery();
    const { mutate } = useQsetMutation();
    const { value, handleChangeInput } = useInput();
    const friend = useFollowingsQuery(value);
    const pass = usePassQsetMutation();

    useEffect(() => {
        friend.refetch();
    }, [value]);

    // 아직 질문이 없거나 질문이 하나 있고 isDone이면
    if (!isLoading && !questionCursor) {
        mutate();
    }

    const { selectedIdx } = useAppSelector((state) => state.bottomSheet);

    return isLoading ? (
        <Loading />
    ) : questionCursor && questionCursor[0].isDone ? (
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

                <FriendImage />

                <Text typo="Caption1r">
                    초대한 친구가 가입하면
                    <br />
                    다음 질문을 바로 받을 수 있어요.
                </Text>
            </Wrapper>

            <BottomButton2>
                <ButtonWrapper gap={14}>
                    <ButtonLineMid text="연락처 동기화" onClick={() => {}} />
                    <ButtonFillMid text="공유하기" onClick={() => {}} />
                </ButtonWrapper>
            </BottomButton2>

            <BottomText>
                <Text typo="Caption1r" color="light_gray2">
                    <Text
                        typo="Caption1r"
                        color="light_qwhite"
                        style={{ textDecoration: "underline" }}
                    >
                        AXE 개인정보 처리방침
                    </Text>
                    AXE에서 사용자의 연락처는 서버로 안전하게 전송되어 친구를
                    찾는 데에만 사용되며, 임의로 광고나 스팸 문자를 보내지
                    않습니다.
                </Text>
            </BottomText>
        </>
    ) : (
        questionCursor && (
            <Flex direction="column">
                <BackTitle
                    type="slide"
                    currentIdx={questionCursor[0].cursor}
                    count={questionCursor[0].QsetLength}
                    reportType="reportFriend"
                />
                {questionCursor && (
                    <SlideLine
                        percentage={[
                            ((questionCursor[0].cursor - 1) /
                                questionCursor[0].QsetLength) *
                                100,
                            (questionCursor[0].cursor /
                                questionCursor[0].QsetLength) *
                                100
                        ]}
                    />
                )}
                <Flex direction="column" gap={38}>
                    <Title typo="Headline1b">
                        {questionCursor[0].currentQ}
                    </Title>

                    <Flex direction="column" gap={16}>
                        <InputFill
                            value={value}
                            onChange={handleChangeInput}
                            placeholder="내 친구의 이름을 검색해보세요."
                        />
                        {friend.isLoading ? (
                            <Loading />
                        ) : (
                            <FriendWrapper>
                                {friend.followings.count ? (
                                    friend.followings.data.map(
                                        (data: Friend, idx: number) => (
                                            <FriendItem
                                                bgColor={
                                                    selectedIdx === null ||
                                                    selectedIdx === idx
                                                        ? colors[
                                                              repeatBackgroundColor[
                                                                  idx % 12
                                                              ]
                                                          ]
                                                        : colors.light_gray2
                                                }
                                                key={idx}
                                                idx={idx}
                                                data={data}
                                            />
                                        )
                                    )
                                ) : (
                                    <></>
                                )}
                            </FriendWrapper>
                        )}
                    </Flex>
                </Flex>

                <ButtonWrapper gap={14} justify="right">
                    <ButtonFillXSmall
                        state="default"
                        text="넘기기"
                        onClick={() => pass.mutate(questionCursor[0].id)}
                    />
                </ButtonWrapper>
            </Flex>
        )
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 25px;

    text-align: center;
`;

const BottomText = styled.div`
    padding: 0 16px;
    display: flex;
    position: absolute;
    bottom: 30px;
`;

const Title = styled(Text)`
    text-align: center;
    white-space: nowrap;
`;

const FriendWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 12px;
    column-gap: 12px;
`;

const BottomButton2 = styled.div`
    width: 100%;
    height: 180px;

    position: absolute;
    left: 0;
    bottom: 0;

    background-color: ${colors.light_qblack};
`;

const BottomInner = styled.div`
    max-width: 600px;
    margin: auto;
    margin-top: 20px;
    padding: 0 16px;

    display: flex;
    gap: 14px;
`;

const ButtonWrapper = styled(Flex)`
    padding: 0 1rem;
    position: absolute;
    bottom: 62px;
`;
