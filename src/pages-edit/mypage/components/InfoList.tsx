"use client";

import styled from "styled-components";
import { colors } from "styles/theme";
import Flex from "src/components/common/Flex";
import Text from "src/components/common/Text";
import { User } from "src/models/account";

export default function InfoList(friend: User) {
    return (
        <InfoListWrapper direction="column" gap={16}>
            <Flex direction="column" gap={8}>
                <Profile />
                <Text typo="Headline1b">{"@" + friend.nickname}</Text>
            </Flex>
            <Flex justify="space-between">
                <Flex width={"auto"} gap={16}>
                    <div>아이콘</div>
                    <Text typo="Subtitle2b">이름</Text>
                </Flex>
                <Text typo="Subtitle2r">{friend.name}</Text>
            </Flex>
            <Line />
            <Flex justify="space-between">
                <Flex width={"auto"} gap={16}>
                    <div>아이콘</div>
                    <Text typo="Subtitle2b">학교</Text>
                </Flex>
                <Text typo="Subtitle2r">
                    {friend.schoolName}
                    {friend.schoolType === "대학생" && " " + friend.class}
                </Text>
            </Flex>
            <Line />
            <Flex justify="space-between">
                <Flex width={"auto"} gap={16}>
                    <div>아이콘</div>
                    <Text typo="Subtitle2b">나의 하트</Text>
                </Flex>
                <Text typo="Subtitle2r">{0}</Text>
            </Flex>
        </InfoListWrapper>
    );
}

const InfoListWrapper = styled(Flex)``;
const Profile = styled.div`
    width: 72px;
    height: 72px;

    background: ${colors.light_gray3};
    border-radius: 50%;
`;

const Line = styled.hr`
    width: 100%;
    height: 1.5px;
    margin: 0;

    background: ${colors.light_gray3};
    border: 0;
`;
