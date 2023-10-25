"use client";

import { styled } from "styled-components";
import { colors } from "styles/theme";
import { useRouter } from "next/navigation";

import NavigationTopBack from "src/components/navigations/NavigationTopBack";
import Flex from "src/components/common/Flex";
import Text from "src/components/common/Text";
import { deleteCookie, deleteUser } from "src/utils/cookie";
import useDeleteMeMutation from "src/hooks/account/useDeleteMeMutation";

export default function SettingPage() {
    const router = useRouter();
    const { deleteMeMutation } = useDeleteMeMutation();
    return (
        <Flex direction="column">
            <NavigationTopBack title="설정" />
            <SettingWrapper direction="column" gap={16}>
                <SettingItem
                    onClick={() => {
                        deleteCookie();
                        router.push("/account");
                    }}
                >
                    <Text typo="Subtitle2r" color="primary_qred">
                        로그아웃
                    </Text>
                </SettingItem>
                <SettingItem
                    onClick={() => {
                        deleteMeMutation.mutate();
                        deleteCookie();
                        deleteUser();
                        router.push("/account");
                    }}
                >
                    <Text typo="Subtitle2r" color="primary_qred">
                        계정 탈퇴
                    </Text>
                </SettingItem>
            </SettingWrapper>
        </Flex>
    );
}

const SettingWrapper = styled(Flex)`
    padding-top: 1rem;
`;

const SettingItem = styled(Flex)`
    padding-bottom: 1rem;
    border-bottom: 1px solid ${colors.line_white_5};
`;
