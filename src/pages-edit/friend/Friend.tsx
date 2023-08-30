"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

import BottomNavigation from "src/components/BottomNavigation";
import Flex from "src/components/common/Flex";
import NavigationTop from "src/components/navigations/NavigationTop";

import FriendItem from "./components/FriendItem";
import InputFill from "src/components/inputs/input-fill";
import RecommendFriend from "./components/RecommendFriend";
import Loading from "src/components/common/Loading";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useInput } from "src/hooks/common/useInput";
import useUsersQuery from "src/hooks/account/useUsersQuery";

import { Friend } from "src/models/account";
import { enterComponentVariants } from "src/constants/animation";

export default function Mypage() {
    const router = useRouter();
    const search = useInput();
    const searchResult = useUsersQuery(search.value);

    useEffect(() => {
        searchResult.refetch();
    }, [search.value]);

    return (
        <Flex direction="column" align="center" gap={40}>
            <Flex direction="column" align="center" gap={16}>
                <NavigationTop title="친구 검색" />
                <InputFill
                    onChange={search.handleChangeInput}
                    value={search.value}
                    placeholder="친구의 이름을 검색해보세요."
                />
                {searchResult.isLoading ? (
                    <Loading />
                ) : search.value === "" ? (
                    <RecommendFriend />
                ) : (
                    <FriendItems
                        variants={enterComponentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {searchResult.users.data.map((following: Friend) => (
                            <FriendItem
                                key={following.id}
                                isFollowing={following.isFollowing}
                                friend={following}
                            />
                        ))}
                    </FriendItems>
                )}
            </Flex>
            <BottomNavigation />
        </Flex>
    );
}

const FriendItems = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
