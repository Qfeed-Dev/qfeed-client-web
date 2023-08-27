"use client";

import { useEffect } from "react";
import useFollowingsQuery from "src/hooks/account/useFollowingsQuery";
import { useInput } from "src/hooks/common/useInput";

import { Friend } from "src/models/account";

import NavigationTopBack from "src/components/navigations/NavigationTopBack";
import Flex from "src/components/common/Flex";

import FriendItem from "../friend/components/FriendItem";
import InputFill from "src/components/inputs/input-fill";

export default function MyFollowingPage() {
    const { value, handleChangeInput } = useInput();
    const { followings, isLoading, refetch } = useFollowingsQuery(value);

    useEffect(() => {
        refetch();
    }, [value]);

    return (
        <Flex direction="column">
            <NavigationTopBack title="내가 팔로우하는 친구" />
            <Flex direction="column" gap={16}>
                <InputFill
                    onChange={handleChangeInput}
                    value={value}
                    placeholder="친구의 이름을 검색해보세요."
                />
                {isLoading ? (
                    <div>로딩중...</div>
                ) : (
                    followings.data.map((following: Friend) => (
                        <FriendItem key={following.id} {...following} />
                    ))
                )}
            </Flex>
        </Flex>
    );
}
