import styled from "styled-components";
import { colors } from "styles/theme";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Flex from "src/components/common/Flex";
import Text from "src/components/common/Text";
import ButtonFillXSmall from "src/components/buttons/button-fill-xsmall";
import FriendProfile from "src/components/Profile/FriendProfile";

import useFriendMutation from "src/hooks/account/useFriendMutation";
import useDeleteFriendMutation from "src/hooks/account/useDeleteFriendMutation";
import { Friend } from "src/models/account";
import useUnBlockFriendMutation from "src/hooks/account/useUnBlockFriendMutation";

export default function FriendItem({
    isFollowing,
    friend
}: {
    isFollowing: boolean | undefined;
    friend: Friend;
}) {
    const router = useRouter();
    const [follow, setFollow] = useState(isFollowing);
    const { friendMutation } = useFriendMutation(friend.id);
    const { delFriendMutation } = useDeleteFriendMutation(friend.id);
    const unblock = useUnBlockFriendMutation();

    return (
        <FriendWrapper>
            <Flex
                justify="start"
                gap={16}
                onClick={() => router.push(`/friend/${friend.id}`)}
            >
                <FriendProfile width={35} url={friend.profileImage} />
                <Flex width="auto" direction="column" align="start">
                    <Text typo="Subtitle1b">{friend.name}</Text>
                    <Text typo="Caption1r">@{friend.nickname}</Text>
                </Flex>
            </Flex>
            <Flex width="auto" gap={16}>
                <ButtonFillXSmall
                    text={
                        friend.isBlocking
                            ? "차단 해제"
                            : follow
                            ? "팔로잉"
                            : "팔로우"
                    }
                    onClick={() => {
                        if (friend.isBlocking) {
                            unblock.mutate(friend.id);
                        } else {
                            if (follow) {
                                delFriendMutation.mutate();
                            } else {
                                friendMutation.mutate();
                            }
                            setFollow((follow) => !follow);
                        }
                    }}
                    state={
                        friend.isBlocking
                            ? "warning"
                            : follow
                            ? "disabled"
                            : "active"
                    }
                />
            </Flex>
        </FriendWrapper>
    );
}

const FriendWrapper = styled(Flex)`
    padding-bottom: 1rem;
    border-bottom: 1px solid ${colors.line_white_5};
`;
