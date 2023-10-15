"use client";

import styled from "styled-components";

import { useRouter } from "next/navigation";

import { colors } from "styles/theme";
import Flex from "src/components/common/Flex";
import Text from "src/components/common/Text";
import Icon from "src/components/Icon/Icon";
import ButtonFillXSmall from "src/components/buttons/button-fill-xsmall";

import { User } from "src/models/account";
import { useState } from "react";
import useFriendMutation from "src/hooks/account/useFriendMutation";
import useDeleteFriendMutation from "src/hooks/account/useDeleteFriendMutation";
import useUnBlockFriendMutation from "src/hooks/account/useUnBlockFriendMutation";
import Profile from "../../../components/Profile/Profile";
import FriendProfile from "src/components/Profile/FriendProfile";

export default function InfoList({
    user,
    isMe
}: {
    user: User;
    isMe: boolean;
}) {
    const router = useRouter();
    const [follow, setFollow] = useState<boolean>(user.isFollowing || false);
    const { friendMutation } = useFriendMutation(user.id);
    const { delFriendMutation } = useDeleteFriendMutation(user.id);
    const unblock = useUnBlockFriendMutation();

    return (
        <InfoListWrapper direction="column" gap={16}>
            <Flex direction="column" gap={8}>
                {isMe ? (
                    <Profile width={72} />
                ) : (
                    <FriendProfile
                        width={72}
                        url={user.profileImage}
                        border={3}
                    />
                )}
                <Text typo="Headline1b">{"@" + user.nickname}</Text>
            </Flex>
            {!isMe && (
                <ButtonFillXSmall
                    text={
                        user.isBlocking
                            ? "차단 해제"
                            : follow
                            ? "팔로잉"
                            : "팔로우"
                    }
                    onClick={() => {
                        if (user.isBlocking) {
                            unblock.mutate(user.id);
                        } else {
                            if (follow) {
                                delFriendMutation.mutate();
                            } else {
                                friendMutation.mutate();
                            }
                            setFollow((follow) => !follow);
                        }
                    }}
                    state={follow ? "disabled" : "active"}
                />
            )}
            <Flex justify="space-between">
                <Flex width={"auto"} gap={16}>
                    <Icon icon="Profile" />
                    <Text typo="Subtitle2b">이름</Text>
                </Flex>
                <Text typo="Subtitle2r">{user.name}</Text>
            </Flex>
            <Line />
            <Flex justify="space-between">
                <Flex width={"auto"} gap={16}>
                    <Icon icon="School" />
                    <Text typo="Subtitle2b">학교</Text>
                </Flex>
                <Text typo="Subtitle2r">
                    {user.schoolName}
                    {user.schoolType === "대학생" && " " + user.class}
                </Text>
            </Flex>
            <Line />
            <Flex justify="space-between">
                <Flex width={"auto"} gap={16}>
                    <Icon icon="Heart" />
                    <Text typo="Subtitle2b">나의 하트</Text>
                </Flex>
                <Text typo="Subtitle2r">{0}</Text>
            </Flex>
            {isMe && (
                <>
                    <Line />
                    <Flex
                        justify="space-between"
                        onClick={() => router.push("/mypage/followings")}
                    >
                        <Flex width={"auto"} gap={16}>
                            <Icon icon="Person" />
                            <Text typo="Subtitle2b">내가 팔로우 하는 친구</Text>
                        </Flex>
                        <Icon
                            icon="RightBracket"
                            color={colors.light_qwhite}
                            fill="transparent"
                        />
                    </Flex>
                </>
            )}
        </InfoListWrapper>
    );
}

const InfoListWrapper = styled(Flex)``;

const Line = styled.hr`
    width: 100%;
    height: 1.5px;
    margin: 0;

    background: ${colors.light_gray3};
    border: 0;
`;
