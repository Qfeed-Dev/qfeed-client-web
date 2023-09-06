"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import Flex from "src/components/common/Flex";

import BottomNavigation from "src/components/BottomNavigation";
import Filter from "./components/Filter";
import HomeTitle from "src/pages-edit/home/components/HomeTitle";
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
        <Flex direction="column">
            <HomeTitle />
            <>
                <Flex direction="column" gap={16}>
                    {user.user && (
                        <CheckOfficial
                            onClick={handleClickPickMe}
                            id={user.user.id}
                        />
                    )}
                    <MakeOfficial onClick={handleClickBasicQuestion} />
                </Flex>
                <Spacing size={20} />

                {/* <Filter isSort={isSort} setIsSort={setIsSort} /> */}
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
                <div ref={ref} style={{ height: "5px" }}></div>
                <Spacing size={globalValue.bottomSheetHeight + 12} />
            </>

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
