"use client";

import InfoList from "./components/InfoList";
import BottomNavigation from "src/components/BottomNavigation";
import QfeedList from "./components/QfeedList";

import Flex from "src/components/common/Flex";
import NavigationTop from "src/components/navigations/NavigationTop";

import { useUserQuery } from "src/hooks/account/useUserQuery";
import Icon from "src/components/Icon/Icon";
import { Setting } from "src/components/Icon/icons";

export default function Mypage() {
    const { user, isLoading } = useUserQuery();
    return (
        <Flex direction="column" align="center" gap={40}>
            {isLoading ? (
                <div>로딩중</div>
            ) : (
                <>
                    <Flex direction="column" align="center" gap={8}>
                        <NavigationTop
                            title="마이페이지"
                            rightIcon={
                                <Flex width="auto" gap={16}>
                                    <Icon icon="Share" />
                                    <Icon icon="Setting" />
                                </Flex>
                            }
                        />
                        {user && <InfoList isMe={true} user={user} />}
                    </Flex>
                    {user?.id !== undefined && <QfeedList id={user.id} />}
                </>
            )}
            <BottomNavigation />
        </Flex>
    );
}
