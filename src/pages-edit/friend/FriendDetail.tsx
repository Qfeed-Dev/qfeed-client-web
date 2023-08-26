"use client";

import { useRouter } from "next/navigation";
import BottomNavigation from "src/components/BottomNavigation";

import Flex from "src/components/common/Flex";

import NavigationTopBack from "src/components/navigations/NavigationTopBack";
import InfoList from "src/pages-edit/mypage/components/InfoList";
import FriendQfeedList from "./components/FriendQfeedList";
import useFriendQuery from "src/hooks/account/useFriendQuery";

import Icon from "src/components/Icon/Icon";

export default function FriendDetailPage({
    params
}: {
    params: { id: number };
}) {
    const { friend, isLoading } = useFriendQuery(params.id);
    const router = useRouter();

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
                    <InfoList {...friend} />
                </Flex>
            )}
            <FriendQfeedList />
            <BottomNavigation />
        </Flex>
    );
}
