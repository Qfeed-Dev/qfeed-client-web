"use client";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import BottomNavigation from "src/components/BottomNavigation";
import BasicQuestion from "src/pages-edit/home/components/BasicQuestion";
import Filter from "./components/Filter";
import HomeTitle from "src/pages-edit/home/components/HomeTitle";
import QfeedFrame from "./components/QfeedFrame";
import Spacing from "src/components/Spacing";
import { colors } from "styles/theme";
import { Route } from "src/constants/Route";
import StackGrid from "react-stack-grid";
import useDisplaySize from "src/hooks/useDisplaySize";
import Icon from "src/components/Icon";
import { useGetQuestions } from "src/hooks/home/useGetQuestions";
import { globalValue } from "src/constants/globalValue";
import { useState } from "react";

export default function Home() {
    const router = useRouter();
    const { width } = useDisplaySize();
    const [isSort, setIsSort] = useState(true);

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
    console.log(data);

    return isLoading ? undefined : (
        <>
            <Spacing size={50} />
            <HomeTitle />
            <HomeWrapper>
                <BasicQuestion
                    type="pick-me"
                    count={8}
                    onClick={handleClickPickMe}
                />
                <BasicQuestion
                    type="question"
                    count={9}
                    onClick={handleClickBasicQuestion}
                />
                <Spacing size={20} />

                <Filter isSort={isSort} setIsSort={setIsSort} />
                <Spacing size={14} />

                <StackGrid
                    columnWidth={Math.floor((width - 45) / 2)}
                    gutterWidth={12}
                    gutterHeight={14}
                >
                    {data?.data?.map((data: any, idx: number) => {
                        return <QfeedFrame key={idx} idx={idx} data={data} />;
                    })}
                </StackGrid>

                <Spacing size={globalValue.bottomSheetHeight + 12} />
            </HomeWrapper>

            <PlusButtonWrapper>
                <PlusButton onClick={handleClickPlus}>
                    <Icon icon="HomePlus" />
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

const PlusButton = styled.div`
    width: 60px;
    height: 60px;
    padding-top: 16px;

    position: absolute;
    right: 17px;
    bottom: 64px;

    border-radius: 50%;
    background-color: ${colors.light_qwhite};
`;
