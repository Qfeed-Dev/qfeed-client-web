"use client";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import BottomNavigation from "src/components/BottomNavigation";
import BasicQuestion from "src/components/pages/home/BasicQuestion";
import Filter from "src/components/pages/home/Filter";
import HomeTitle from "src/components/pages/home/HomeTitle";
import QfeedFrame from "src/components/pages/home/QfeedFrame";
import Spacing from "src/components/Spacing";
import { colors } from "styles/theme";
import { Route } from "src/constants/Route";
import StackGrid from "react-stack-grid";
import useDisplaySize from "src/hooks/useDisplaySize";

const HomeDatas = [
    { title: "기말고사에 솔직히 족보 봤다", answer: 0 },
    { title: "기말고사에 솔직히 족보 봤다고 생각하는 사람", answer: 0 },
    { title: "기말고사에 솔", answer: 100 },
    { title: "기말고사에 솔직히 족보 봤다", answer: 100 },
    { title: "기말고사에 솔", answer: 10 },
    { title: "기말고사에 솔직히 족보 봤다고 생각하는 사람", answer: 100 },
    { title: "기말고사에 솔", answer: 10 }
];

export default function Page() {
    const router = useRouter();
    const { width } = useDisplaySize();

    const handleClickPickMe = () => {
        router.push(Route.PICK_ME());
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
    console.log(width);

    return (
        <>
            <HomeWrapper>
                <HomeTitle />
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

                <PlusButton onClick={handleClickPlus} />
                <Spacing size={68} />
            </HomeWrapper>

            <BottomNavigation />
        </>
    );
}

const HomeWrapper = styled.div`
    height: 100%;
`;

const FrameWrapper = styled.div`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(auto-fill, 170px);
    grid-auto-rows: 1px;
`;

const PlusButton = styled.div`
    width: 60px;
    height: 60px;

    position: absolute;
    right: 16px;
    bottom: 64px;

    border-radius: 50%;
    background-color: ${colors.light_qwhite};
    z-index: 999;
`;
