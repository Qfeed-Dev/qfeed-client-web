"use client";

import { useToggle } from "src/hooks/common/useToggle";

import BottomNavigation from "src/components/BottomNavigation";
import Flex from "src/components/common/Flex";
import Icon from "src/components/Icon/Icon";

import NavigationTopBack from "src/components/navigations/NavigationTopBack";
import InfoList from "src/pages-edit/mypage/components/InfoList";
import useFriendQuery from "src/hooks/account/useFriendQuery";
import QfeedList from "../mypage/components/QfeedList";

export default function FriendDetailPage({
    params
}: {
    params: { id: number };
}) {
    const { friend, isLoading } = useFriendQuery(params.id);
    const { value, handleChangeState } = useToggle("personal");

    return (
        <Flex direction="column" align="center" gap={40}>
            {isLoading ? (
                <div>로딩중 ...</div>
            ) : (
                <Flex direction="column" align="center" gap={8}>
                    <NavigationTopBack
                        title={friend?.nickname}
                        rightIcon={
                            <Flex width="auto" gap={24}>
                                <Icon icon="Share" />
                                <Icon icon="Ban" />
                            </Flex>
                        }
                    />
                    <Flex direction="column" gap={32}>
                        {friend && <InfoList user={friend} isMe={false} />}
                        {friend?.id && <QfeedList id={friend.id} />}
                    </Flex>
                </Flex>
            )}
            <BottomNavigation />
        </Flex>
    );
}
