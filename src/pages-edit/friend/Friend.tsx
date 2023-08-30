"use client";

import BottomNavigation from "src/components/BottomNavigation";
import Flex from "src/components/common/Flex";
import Text from "src/components/common/Text";
import NavigationTop from "src/components/navigations/NavigationTop";

import FriendItem from "./components/FriendItem";
import InputFill from "src/components/inputs/input-fill";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useInput } from "src/hooks/common/useInput";
import useUsersQuery from "src/hooks/account/useUsersQuery";
import useUnFollowingsQuery from "src/hooks/account/useUnFollowingsQuery";

import { Friend } from "src/models/account";
import Loading from "src/components/common/Loading";
import styled from "styled-components";
import { motion } from "framer-motion";
import { enterComponentVariants } from "src/constants/animation";

export default function Mypage() {
    const router = useRouter();
    const search = useInput();
    const searchResult = useUsersQuery(search.value);
    const recommend = useUnFollowingsQuery();

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
                {searchResult.isLoading || recommend.isLoading ? (
                    <Loading />
                ) : search.value === "" ? (
                    <Flex direction="column" align="start" gap={16}>
                        <Text typo="Subtitle2b">추천 친구</Text>
                        <FriendItems
                            variants={enterComponentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            {recommend.unfollowings.data.map(
                                (following: Friend) => (
                                    <FriendItem
                                        key={following.id}
                                        isFollowing={false}
                                        friend={following}
                                    />
                                )
                            )}
                        </FriendItems>
                    </Flex>
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
