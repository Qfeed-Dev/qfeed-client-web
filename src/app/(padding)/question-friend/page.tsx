"use client";

import useQsetCursorQuery from "src/hooks/questions/useQsetCursorQuery";
import useQsetMutation from "src/hooks/questions/useQsetMutation";
import { useInput } from "src/hooks/common/useInput";
import useFollowingsQuery from "src/hooks/account/useFollowingsQuery";
import { useEffect } from "react";
import usePassQsetMutation from "src/hooks/questions/usePassQsetCursorMutation";

import FriendItem from "src/pages-edit/question/Friend";
import SlideLine from "src/components/SlideLine";
import Spacing from "src/components/Spacing";
import BackTitle from "src/components/Title/BackTitle";
import { colors } from "styles/theme";
import styled from "styled-components";
import FriendImage from "src/components/Icon/icons/images/FriendImage";
import Text from "src/components/common/Text";

import Loading from "src/components/common/Loading";
import Flex from "src/components/common/Flex";
import ButtonFillMid from "src/components/buttons/button-fill-mid";
import ButtonLineMid from "src/components/buttons/button-line-mid";
import InputFill from "src/components/inputs/input-fill";
import { Friend } from "src/models/account";
import { useAppSelector } from "src/hooks/useReduxHooks";
import ButtonFillXSmall from "src/components/buttons/button-fill-xsmall";
import { getAppStateColor } from "src/utils/colorGenerate";
import NavigationTopBack from "src/components/navigations/NavigationTopBack";
import ButtonFillLarge from "src/components/buttons/button-fill-large";

export default function Page() {
    const { questionCursor, isLoading } = useQsetCursorQuery();
    const { mutate } = useQsetMutation();
    const { value, handleChangeInput } = useInput();
    const friend = useFollowingsQuery(value);
    const pass = usePassQsetMutation();

    useEffect(() => {
        friend.refetch();
    }, [value]);

    const { selectedIdx } = useAppSelector((state) => state.bottomSheet);
    return isLoading ? (
        <Loading />
    ) : questionCursor?.length ? (
        questionCursor[0].isDone ? (
            <Flex direction="column">
                <NavigationTopBack />
                <Wrapper direction="column">
                    <Text typo="Subtitle2r">10가지 질문에 모두 답했군요!</Text>
                    <Spacing size={8} />
                    <Text typo="Headline1b">
                        앙케이트에 더 답하고 싶다면
                        <br />
                        친구를 초대해봐
                    </Text>

                    <FriendImage />
                    <Flex direction="column" gap={24}>
                        <Text typo="Caption1r" color="light_gray1">
                            초대한 친구가 가입하면
                            <br />
                            다음 질문을 바로 받을 수 있어요.
                        </Text>
                        <ButtonPaddingWrapper gap={14}>
                            <ButtonFillMid
                                text="연락처 동기화"
                                onClick={() => {}}
                            />
                            <ButtonLineMid text="공유하기" onClick={() => {}} />
                        </ButtonPaddingWrapper>
                    </Flex>
                </Wrapper>
                <BottomText>
                    <Text typo="Caption1r" color="light_gray2">
                        <Text
                            typo="Caption1r"
                            color="light_qwhite"
                            style={{ textDecoration: "underline" }}
                        >
                            AXE 개인정보 처리방침
                        </Text>
                        AXE에서 사용자의 연락처는 서버로 안전하게 전송되어
                        친구를 찾는 데에만 사용되며, 임의로 광고나 스팸 문자를
                        보내지 않습니다.
                    </Text>
                </BottomText>
            </Flex>
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
                                                        selectedIdx === data.id
                                                            ? colors[
                                                                  getAppStateColor(
                                                                      data.id
                                                                  )
                                                              ]
                                                            : colors.light_gray2
                                                    }
                                                    key={idx}
                                                    idx={idx}
                                                    data={data}
                                                    qset={questionCursor[0].id}
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
        )
    ) : (
        // 아직 질문이 없거나 질문이 하나 있고 isDone이면
        <>
            <NavigationTopBack />
            <NewWrapper height="100%" direction="column" align="space-around">
                <Flex direction="column">
                    <Text typo="Subtitle2r">새로운 질문을 받았어요!</Text>
                    <Spacing size={8} />
                    <Text typo="Headline1b">
                        아무도 모르게 쉿!
                        <br />새 큐피드를 보내볼까요?
                    </Text>
                    <Img src="/img/start.png" />
                </Flex>
                <Flex direction="column" gap={24}>
                    <Text typo="Caption1r" color="light_gray1">
                        새로운 10가지 질문에 답해보세요
                    </Text>
                    <ButtonFillLarge
                        state="active"
                        text="시작하기"
                        onClick={() => mutate()}
                        bottom={false}
                    />
                </Flex>
            </NewWrapper>
        </>
    );
}

const Wrapper = styled(Flex)`
    width: 100vw;
    max-width: 600px;
    text-align: center;

    position: fixed;
    top: 100px;
`;

const BottomText = styled.div`
    padding: 0 1rem;
    position: fixed;
    bottom: 30px;
`;

const Title = styled(Text)`
    text-align: center;
`;

const ButtonPaddingWrapper = styled(Flex)`
    padding: 0 1rem;
`;

const FriendWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 12px;
    column-gap: 12px;
`;

const NewWrapper = styled(Flex)`
    text-align: center;
`;

const ButtonWrapper = styled(Flex)`
    padding: 0 1rem;
    position: absolute;
    bottom: 62px;
`;

const Img = styled.img`
    width: 100vw;
    max-width: 600px;
`;
