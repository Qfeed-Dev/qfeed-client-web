"use client";

import styled from "styled-components";
import BottomNavigation from "src/components/BottomNavigation";

import Flex from "src/components/common/Flex";
import Text from "src/components/common/Text";
import { colors } from "styles/theme";

import NavigationTopBack from "src/components/navigations/NavigationTopBack";
import InfoList from "src/pages-edit/mypage/components/InfoList";
import FriendQfeedList from "./components/FriendQfeedList";
import useFriendQuery from "src/hooks/account/useFriendQuery";

export default function FriendDetailPage({
    params
}: {
    params: { id: number };
}) {
    const { friend, isLoading } = useFriendQuery(params.id);

    return (
        <Flex direction="column" align="center" gap={40}>
            {isLoading ? (
                <div>로딩중 ...</div>
            ) : (
                <Flex direction="column" align="center" gap={8}>
                    <NavigationTopBack
                        title={friend?.nickname}
                        rightIcon={<div>아이콘</div>}
                    />
                    <InfoList {...friend} />
                </Flex>
            )}
            <FriendQfeedList />
            <BottomNavigation />
        </Flex>
    );
}
