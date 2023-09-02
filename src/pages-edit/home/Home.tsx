"use client";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import BottomNavigation from "src/components/BottomNavigation";
import BasicQuestion from "src/pages-edit/home/components/BasicQuestion";
import Filter from "./components/Filter";
import HomeTitle from "src/pages-edit/home/components/HomeTitle";
import QFeedFrame from "./components/QfeedFrame";
import Spacing from "src/components/Spacing";
import { colors } from "styles/theme";
import { Route } from "src/constants/Route";
import StackGrid from "react-stack-grid";
import useDisplaySize from "src/hooks/useDisplaySize";
import Icon from "src/components/Icon";
import { useGetQuestions } from "src/hooks/home/useGetQuestions";
import { globalValue } from "src/constants/globalValue";
import { useState } from "react";
import Text from "src/components/common/Text";
import { useUserQuery } from "src/hooks/account/useUserQuery";
import Loading from "src/components/common/Loading";
import MakeOfficial from "./components/MakeOfficial";

export default function Home() {
    const router = useRouter();
    const { width } = useDisplaySize();
    const [isSort, setIsSort] = useState(true);
    const time = 1;
    const time2 = 1;

    const handleClickPickMe = () => {
        router.push(Route.MYPAGE());
    };
    const handleClickBasicQuestion = () => {
        router.push(Route.QUESTION_FRIEND());
    };
    const handleClickPlus = () => {
        router.push(Route.ADD_QUESTION());
    };

    const { data, isLoading } = useGetQuestions();
    const user = useUserQuery();

    return isLoading || user.isLoading ? (
        <></>
    ) : (
        <>
            <Spacing size={50} />
            <HomeTitle />
            <HomeWrapper>
                <BasicQuestion
                    type="pick-me"
                    onClick={handleClickPickMe}
                    user={user.user}
                />

                <MakeOfficial onClick={handleClickBasicQuestion} />
                <Spacing size={20} />

                <Filter isSort={isSort} setIsSort={setIsSort} />
                <Spacing size={14} />
                {isLoading ? (
                    <></>
                ) : (
                    <StackGrid
                        columnWidth={Math.floor((width - 45) / 2)}
                        gutterWidth={12}
                        gutterHeight={14}
                    >
                        {data?.data?.map((data: any, idx: number) => {
                            return (
                                <QFeedFrame key={idx} idx={idx} data={data} />
                            );
                        })}
                    </StackGrid>
                )}
                <Spacing size={globalValue.bottomSheetHeight + 12} />
            </HomeWrapper>

            <PlusButtonWrapper>
                <PlusButton time={time2} onClick={handleClickPlus}>
                    {time2 ? (
                        // <Text
                        //     typo="Caption1r"
                        //     color="light_qwhite"
                        //     style={{ margin: "auto", display: "flex" }}
                        // >
                        //     1
                        // </Text>
                        <div style={{ margin: "auto", display: "flex" }}>
                            <Icon
                                icon="HomePlus"
                                color="light_qwhite"
                                fill="light_qwhite"
                            />
                        </div>
                    ) : (
                        <div style={{ margin: "auto", display: "flex" }}>
                            <Icon
                                icon="HomePlus"
                                color="light_qblack"
                                fill="light_qblack"
                            />
                        </div>
                    )}
                </PlusButton>
            </PlusButtonWrapper>
            <BottomNavigation />
        </>
    );
}

const HomeWrapper = styled.div`
    height: calc(100% - ${globalValue.bottomSheetHeight});
    margin: 0 auto;
    padding: 0 16px;
    position: relative;
`;

const PlusButtonWrapper = styled.div`
    width: 100%;
    max-width: 600px;
    margin: auto;

    display: flex;
    position: fixed;
    bottom: 0;
    z-index: 901;
`;

const PlusButton = styled.div<{ time: any }>`
    width: 60px;
    height: 60px;
    margin: auto;

    display: flex;
    text-align: center;

    position: absolute;
    right: 17px;
    bottom: 64px;

    border: ${({ time }) => (time > 0 ? 3 : 0)}px solid ${colors.light_qwhite};
    border-radius: 50%;
    background-color: ${({ time }) =>
        time ? colors.light_qblack : colors.light_qwhite};
`;
