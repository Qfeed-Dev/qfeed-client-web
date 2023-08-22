"use client";

import styled from "styled-components";
import BottomNavigation from "src/components/BottomNavigation";

import Flex from "src/components/common/Flex";
import Text from "src/components/common/Text";
import { colors } from "styles/theme";

import NavigationTopBack from "src/components/navigations/NavigationTopBack";
import InfoList from "src/pages-edit/mypage/components/InfoList";
import QfeedList from "src/pages-edit/mypage/components/QfeedList";

export default function FriendDetailPage({
    params
}: {
    params: { id: number };
}) {
    return (
        <Flex direction="column" align="center" gap={40}>
            <Flex direction="column" align="center" gap={8}>
                <NavigationTopBack
                    title="hamo-o"
                    rightIcon={<div>아이콘</div>}
                />
                <InfoList />
            </Flex>
            <QfeedList />
            <BottomNavigation />
        </Flex>
    );
}
