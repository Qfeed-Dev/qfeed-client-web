"use client";

import InfoList from "./components/InfoList";
import BottomNavigation from "src/components/BottomNavigation";
import QfeedList from "./components/QfeedList";

import Flex from "src/components/common/Flex";
import NavigationTop from "src/components/navigations/NavigationTop";

export default function Mypage() {
    return (
        <Flex direction="column" align="center" gap={40}>
            <Flex direction="column" align="center" gap={8}>
                <NavigationTop
                    title="마이페이지"
                    rightIcon={
                        <Flex width="auto" gap={24}>
                            <div>아이콘</div>
                            <div>아이콘</div>
                        </Flex>
                    }
                />
                <InfoList />
            </Flex>
            <QfeedList />
            <BottomNavigation />
        </Flex>
    );
}
