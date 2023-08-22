"use client";

import BottomNavigation from "src/components/BottomNavigation";
import Flex from "src/components/common/Flex";
import NavigationTop from "src/components/navigations/NavigationTop";

import FriendItem from "./components/FriendItem";

export default function Mypage() {
    return (
        <Flex direction="column" align="center" gap={40}>
            <Flex direction="column" align="center" gap={16}>
                <NavigationTop
                    title="내가 팔로우하는 목록"
                    rightIcon={<div>아이콘</div>}
                />
                <FriendItem />
                <FriendItem />
                <FriendItem />
                <FriendItem />
                <FriendItem />
                <FriendItem />
                <FriendItem />
                <FriendItem />
                <FriendItem />
                <FriendItem />
                <FriendItem />
                <FriendItem />
            </Flex>
            <BottomNavigation />
        </Flex>
    );
}
