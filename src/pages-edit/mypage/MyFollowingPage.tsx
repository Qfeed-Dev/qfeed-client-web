"use client";

import { styled } from "styled-components";
import { motion } from "framer-motion";
import { useEffect } from "react";
import useFollowingsQuery from "src/hooks/account/useFollowingsQuery";
import { useInput } from "src/hooks/common/useInput";
import { colors } from "styles/theme";
import Text from "src/components/common/Text";

import { Friend } from "src/models/account";

import NavigationTopBack from "src/components/navigations/NavigationTopBack";
import Flex from "src/components/common/Flex";
import FriendItem from "../friend/components/FriendItem";
import InputFill from "src/components/inputs/input-fill";
import Loading from "src/components/common/Loading";

import { enterComponentVariants } from "src/constants/animation";

export default function MyFollowingPage() {
    const { value, handleChangeInput } = useInput("");
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
                <FriendWrapper
                    variants={enterComponentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    {isLoading ? (
                        <Loading />
                    ) : followings.count ? (
                        followings.data.map((following: Friend) => (
                            <FriendItem
                                key={following.id}
                                isFollowing={true}
                                friend={following}
                            />
                        ))
                    ) : (
                        <Text typo="Subtitle1r" style={{ textAlign: "center" }}>
                            아직 팔로잉하는 친구가 없어요
                        </Text>
                    )}
                </FriendWrapper>
            </Flex>
        </Flex>
    );
}

const FriendWrapper = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
