"use client";
import { useEffect } from "react";

import BottomNavigation from "src/components/BottomNavigation";
import Flex from "src/components/common/Flex";
import NavigationTopBack from "src/components/navigations/NavigationTopBack";

import FriendItem from "./components/FriendItem";
import InputFill from "src/components/inputs/input-fill";

import { useInput } from "src/hooks/common/useInput";
import useUsersQuery from "src/hooks/account/useUsersQuery";

import { Friend } from "src/models/account";

export default function FriendRecommendPage() {
    const search = useInput();
    const { users, isLoading, refetch } = useUsersQuery(search.value);
    useEffect(() => {
        refetch();
    }, [search.value]);

    return (
        <Flex direction="column" align="center" gap={40}>
            <Flex direction="column" align="center" gap={16}>
                <NavigationTopBack title="친구 추천" />
                <InputFill
                    onChange={search.handleChangeInput}
                    value={search.value}
                    placeholder="내 친구의 이름을 검색해보세요."
                />
                {isLoading ? (
                    <div>로딩중...</div>
                ) : (
                    users.data.map((following: Friend) => (
                        <FriendItem key={following.id} {...following} />
                    ))
                )}
            </Flex>
            <BottomNavigation />
        </Flex>
    );
}
