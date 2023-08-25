import Flex from "src/components/common/Flex";
import Text from "src/components/common/Text";

import styled from "styled-components";
import { colors } from "styles/theme";

import { useRouter } from "next/navigation";

import ButtonFillXSmall from "src/components/buttons/button-fill-xsmall";

import useFriendMutation from "src/hooks/account/useFriendMutation";
import useDeleteFriendMutation from "src/hooks/account/useDeleteFriendMutation";
import { Friend } from "src/models/account";

export default function FriendItem(friend: Friend) {
    const router = useRouter();
    const { friendMutation } = useFriendMutation(friend.id);
    const { delFriendMutation } = useDeleteFriendMutation(friend.id);

    return (
        <FriendWrapper
            justify="space-between"
            onClick={() => router.push(`/friend/${friend.id}`)}
        >
            <Flex width="auto" gap={16}>
                <ImgCover></ImgCover>
                <Flex direction="column">
                    <Text typo="Subtitle1b">{friend.name}</Text>
                    <Text typo="Caption1r">@{friend.nickname}</Text>
                </Flex>
            </Flex>
            <Flex width="auto" gap={16}>
                <ButtonFillXSmall
                    text="팔로잉"
                    onClick={() => {
                        delFriendMutation.mutate();
                    }}
                    color="light_gray1"
                ></ButtonFillXSmall>
                <ButtonFillXSmall
                    text="팔로우"
                    onClick={() => {
                        friendMutation.mutate();
                    }}
                    color="primary_qgreen"
                ></ButtonFillXSmall>
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
