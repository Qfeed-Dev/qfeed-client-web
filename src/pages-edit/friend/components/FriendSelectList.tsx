"use client";

import { useRouter } from "next/navigation";
import styled from "styled-components";

import Flex from "src/components/common/Flex";
import Text from "src/components/common/Text";
import { colors } from "styles/theme";

export default function FriendSelectList() {
    const router = useRouter();
    return (
        <SelectWrapper direction="column" gap={16}>
            <SelectItem
                direction="column"
                align="start"
                gap={8}
                onClick={() => {
                    router.push(`/mypage/select/${1}`);
                }}
            >
                <Text typo="Subtitle2b">
                    애인에게 가장 잘 해줄 것 같은 사람은?
                </Text>
                <Flex justify="space-between" gap={16}>
                    <Text typo="Caption1b" color="line_white_70">
                        4명이 나를 선택
                    </Text>
                    <Text typo="Caption2r" color="light_gray2">
                        23/04/03
                    </Text>
                </Flex>
            </SelectItem>
            <SelectItem direction="column" align="start" gap={8}>
                <Text typo="Subtitle2b">
                    애인에게 가장 잘 해줄 것 같은 사람은?
                </Text>
                <Flex justify="space-between" gap={16}>
                    <Text typo="Caption1b" color="line_white_70">
                        4명이 나를 선택
                    </Text>
                    <Text typo="Caption2r" color="light_gray2">
                        23/04/03
                    </Text>
                </Flex>
            </SelectItem>
            <SelectItem direction="column" align="start" gap={8}>
                <Text typo="Subtitle2b">
                    애인에게 가장 잘 해줄 것 같은 사람은?
                </Text>
                <Flex justify="space-between" gap={16}>
                    <Text typo="Caption1b" color="line_white_70">
                        4명이 나를 선택
                    </Text>
                    <Text typo="Caption2r" color="light_gray2">
                        23/04/03
                    </Text>
                </Flex>
            </SelectItem>
        </SelectWrapper>
    );
}

const SelectWrapper = styled(Flex)``;

const SelectItem = styled(Flex)`
    padding-bottom: 1rem;
    border-bottom: 1px solid ${colors.line_white_30};
`;
