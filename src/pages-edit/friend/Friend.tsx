"use client";

import BottomNavigation from "src/components/BottomNavigation";
import Flex from "src/components/common/Flex";
import NavigationTop from "src/components/navigations/NavigationTop";

import FriendItem from "./components/FriendItem";
import InputFill from "src/components/inputs/input-fill";

import { useInput } from "src/hooks/common/useInput";
import useFollowingsQuery from "src/hooks/account/useFollowingsQuery";

import { Friend } from "src/models/account";

export default function Mypage() {
    const search = useInput();
    const { followings, isLoading } = useFollowingsQuery();

    return (
        <Flex direction="column" align="center" gap={40}>
            <Flex direction="column" align="center" gap={16}>
                <NavigationTop
                    title="내가 팔로우하는 목록"
                    rightIcon={<div>아이콘</div>}
                />
                <InputFill
                    onChange={search.handleChangeInput}
                    value={search.value}
                    placeholder="내 친구의 이름을 검색해보세요."
                />
                {isLoading ? (
                    <div>로딩중...</div>
                ) : (
                    followings.data.map((following: Friend) => (
                        <FriendItem key={following.id} {...following} />
                    ))
                )}
            </Flex>
            <BottomNavigation />
        </Flex>
    );
}
