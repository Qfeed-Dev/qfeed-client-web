"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import Flex from "src/components/common/Flex";
import Text from "src/components/common/Text";

import BottomNavigation from "src/components/BottomNavigation";
import Filter from "./components/Filter";
import Spacing from "src/components/Spacing";
import { colors } from "styles/theme";
import { Route } from "src/constants/Route";
import Icon from "src/components/Icon";

import { globalValue } from "src/constants/globalValue";

import { useUserQuery } from "src/hooks/account/useUserQuery";
import { useGetQuestions } from "src/hooks/questions/useGetQuestions";

import MakeOfficial from "./components/MakeOfficial";
import CheckOfficial from "./components/CheckOfficial";

import QuestionGrid from "src/components/GridWrapper";
import { useAppDispatch } from "src/hooks/useReduxHooks";
import { changeQType } from "src/reducer/slices/qtype/qtypeSlice";
import ButtonFillXSmall from "src/components/buttons/button-fill-xsmall";
import NavigationTop from "src/components/navigations/NavigationTop";
import Profile from "../mypage/components/Profile";

export default function Home() {
    const router = useRouter();
    const [isSort, setIsSort] = useState(true);
    const dispatch = useAppDispatch();

    const handleClickPickMe = () => {
        dispatch(
            changeQType({
                value: "official"
            })
        );
        router.push(Route.MYPAGE());
    };
    const handleClickBasicQuestion = () => {
        router.push(Route.QUESTION_FRIEND());
    };
    const handleClickPlus = () => {
        router.push(Route.ADD_QUESTION());
    };

    const { data, fetchNextPage, hasNextPage, isFetched } = useGetQuestions();

    const user = useUserQuery();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView]);

    return user.isLoading ? (
        <></>
    ) : (
        <Flex direction="column" gap={16}>
            <NavigationTop
                leftIcon={
                    <Profile
                        width={46}
                        onClick={() => router.push("/mypage")}
                    />
                }
            />
            <Flex direction="column" gap={16}>
                {user.user && (
                    <CheckOfficial
                        onClick={handleClickPickMe}
                        id={user.user.id}
                    />
                )}
                <MakeOfficial onClick={handleClickBasicQuestion} />
            </Flex>

            {/* <Filter isSort={isSort} setIsSort={setIsSort} /> */}
            {data?.pages[0].data.count ? (
                <Flex gap={12} align="start">
                    <Flex direction="column" gap={12} align="start">
                        {isFetched &&
                            data?.pages.map((question, idx) => (
                                <QuestionGrid
                                    key={idx}
                                    questions={question.data.data.filter(
                                        (data: any, idx: number) =>
                                            idx % 2 === 0
                                    )}
                                    colorStart={1}
                                />
                            ))}
                    </Flex>
                    <Flex direction="column" gap={12} align="start">
                        {isFetched &&
                            data?.pages.map((question, idx) => (
                                <QuestionGrid
                                    key={idx}
                                    questions={question.data.data.filter(
                                        (data: any, idx: number) =>
                                            idx % 2 === 1
                                    )}
                                    colorStart={4}
                                />
                            ))}
                    </Flex>
                </Flex>
            ) : (
                <Flex height="50vh" direction="column" gap={16}>
                    <Flex direction="column" gap={8}>
                        <Text typo="Subtitle1r" color="line_white_70">
                            아직 Personal Q가 없으시군요!
                        </Text>
                        <Text typo="Headline1b" style={{ textAlign: "center" }}>
                            친구를 추가해서
                            <br />
                            QFeed를 확인해보세요
                        </Text>
                    </Flex>
                    <ButtonFillXSmall
                        text="친구 추가하러 가기"
                        state="active"
                        onClick={() => router.push("/friend")}
                    />
                </Flex>
            )}
            <div ref={ref} style={{ height: "5px" }}></div>

            <PlusButtonWrapper onClick={handleClickPlus}>
                <PlusButton>
                    <Icon
                        icon="HomePlus"
                        color="light_qwhite"
                        fill="light_qwhite"
                    />
                </PlusButton>
            </PlusButtonWrapper>
            <BottomNavigation />
        </Flex>
    );
}

const PlusButtonWrapper = styled.div`
    width: 100%;
    max-width: 600px;
    margin: auto;

    display: flex;
    position: fixed;
    bottom: 0;
    z-index: 901;
`;

const PlusButton = styled.div`
    width: 60px;
    height: 60px;
    margin: auto;

    position: absolute;
    right: 17px;
    bottom: 64px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 3px solid ${colors.light_qwhite};
    border-radius: 50%;
    background-color: ${colors.light_qblack};
`;
