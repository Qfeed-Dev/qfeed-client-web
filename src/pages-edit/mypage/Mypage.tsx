"use client";

import InfoList from "./components/InfoList";
import BottomNavigation from "src/components/BottomNavigation";
import QfeedList from "./components/QfeedList";

import Flex from "src/components/common/Flex";

export default function Mypage() {
    return (
        <>
            <Flex direction="column" align="center" gap={40}>
                <InfoList />
                <QfeedList />
                <BottomNavigation />
            </Flex>
        </>
    );
}
