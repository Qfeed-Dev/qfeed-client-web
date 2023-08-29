import styled from "styled-components";
import { colors } from "styles/theme";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Flex from "src/components/common/Flex";
import Text from "src/components/common/Text";
import ButtonFillXSmall from "src/components/buttons/button-fill-xsmall";

import useFriendMutation from "src/hooks/account/useFriendMutation";
import useDeleteFriendMutation from "src/hooks/account/useDeleteFriendMutation";
import { Friend } from "src/models/account";

export default function FriendItem({
    isFollowing,
    friend
}: {
    isFollowing: boolean;
    friend: Friend;
}) {
    const router = useRouter();
    const [follow, setFollow] = useState(isFollowing);
    const { friendMutation } = useFriendMutation(friend.id);
    const { delFriendMutation } = useDeleteFriendMutation(friend.id);

    return (
        <FriendWrapper>
            <Flex gap={16} onClick={() => router.push(`/friend/${friend.id}`)}>
                <ImgCover></ImgCover>
                <Flex direction="column" align="start">
                    <Text typo="Subtitle1b">{friend.name}</Text>
                    <Text typo="Caption1r">@{friend.nickname}</Text>
                </Flex>
            </Flex>
            <Flex width="auto" gap={16}>
                <ButtonFillXSmall
                    text={follow ? "팔로잉" : "팔로우"}
                    onClick={() => {
                        follow
                            ? delFriendMutation.mutate()
                            : friendMutation.mutate();
                        setFollow((follow) => !follow);
                    }}
                    state={follow ? "disabled" : "active"}
                />
            </Flex>
        </FriendWrapper>
    );
}

const FriendWrapper = styled(Flex)`
    padding-bottom: 1rem;
    border-bottom: 1px solid ${colors.line_white_5};
`;

const ImgCover = styled.div`
    min-width: 35px;
    min-height: 35px;
    background: ${colors.light_gray1};

    border-radius: 50%;
`;
