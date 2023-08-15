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

const HomeDatas = [
    { title: "기말고사에 솔직히 족보 봤다", answer: 0 },
    { title: "기말고사에 솔직히 족보 봤다고 생각하는 사람", answer: 0 },
    { title: "기말고사에 솔", answer: 100 },
    { title: "기말고사에 솔직히 족보 봤다", answer: 100 },
    { title: "기말고사에 솔", answer: 10 },
    { title: "기말고사에 솔직히 족보 봤다고 생각하는 사람", answer: 100 },
    { title: "기말고사에 솔", answer: 10 }
];

export default function Home() {
    const router = useRouter();
    const { width } = useDisplaySize();

    const handleClickPickMe = () => {
        router.push(Route.MYPAGE());
    };
    const handleClickBasicQuestion = () => {
        router.push(Route.QUESTION_FRIEND());
    };
    const handleClickFrame = () => {
        router.push(Route.QUESTION());
    };
    const handleClickPlus = () => {
        router.push(Route.ADD_QUESTION());
    };

    return (
        <>
            <Spacing size={50} />
            <HomeTitle />
            <HomeWrapper>
                <BasicQuestion type="pick-me" onClick={handleClickPickMe} />
                <BasicQuestion
                    type="question"
                    onClick={handleClickBasicQuestion}
                />
                <Spacing size={20} />

                <Filter />
                <Spacing size={14} />

                <StackGrid
                    columnWidth={(width - 45) / 2}
                    gutterWidth={12}
                    gutterHeight={14}
                >
                    {HomeDatas.map((data: any, idx: number) => {
                        return (
                            <QfeedFrame
                                key={idx}
                                idx={idx}
                                data={data}
                                onClick={handleClickFrame}
                            />
                        );
                    })}
                </StackGrid>

                <Spacing size={68} />
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
    height: 100%;
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
    right: 0;
    bottom: 64px;

    border-radius: 50%;
    background-color: ${colors.light_qwhite};
`;
