"use client";

import InfoList from "./components/InfoList";
import BottomNavigation from "src/components/BottomNavigation";
import QfeedList from "./components/QfeedList";

import Flex from "src/components/common/Flex";
import NavigationTop from "src/components/navigations/NavigationTop";

import { useUserQuery } from "src/hooks/account/useUserQuery";

export default function Mypage() {
    const { user, isLoading } = useUserQuery();
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
                {isLoading ? <div>로딩중</div> : <InfoList {...user} />}
            </Flex>
            <QfeedList />
            <BottomNavigation />
        </Flex>
    );
}
