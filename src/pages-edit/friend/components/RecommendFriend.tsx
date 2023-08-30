import styled from "styled-components";
import { motion } from "framer-motion";

import useUnFollowingsQuery from "src/hooks/account/useUnFollowingsQuery";

import Flex from "src/components/common/Flex";
import Text from "src/components/common/Text";
import FriendItem from "./FriendItem";
import Loading from "src/components/common/Loading";

import { enterComponentVariants } from "src/constants/animation";
import { Friend } from "src/models/account";

const RecommendFriend = () => {
    const { isLoading, unfollowings } = useUnFollowingsQuery();
    return isLoading ? (
        <Loading />
    ) : (
        <Flex direction="column" align="start" gap={16}>
            <Text typo="Subtitle2b">추천 친구</Text>
            <FriendItems
                variants={enterComponentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                {unfollowings.data.map((following: Friend) => (
                    <FriendItem
                        key={following.id}
                        isFollowing={false}
                        friend={following}
                    />
                ))}
            </FriendItems>
        </Flex>
    );
};

const FriendItems = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export default RecommendFriend;
