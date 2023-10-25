"use client";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import ButtonFillLarge from "src/components/buttons/button-fill-large";
import NavigationTopBack from "src/components/navigations/NavigationTopBack";

import Text from "src/components/common/Text";
import Flex from "src/components/common/Flex";
import Icon from "src/components/Icon/Icon";
import { useUserQuery } from "src/hooks/account/useUserQuery";
import Loading from "src/components/common/Loading";

const Complete = () => {
    const router = useRouter();
    const user = useUserQuery();

    return user.isLoading ? (
        <Loading />
    ) : (
        <Flex height="100%" direction="column">
            <NavigationTopBack title="회원 가입" />
            <Flex
                height="100%"
                direction="column"
                justify="space-between"
                align="start"
            >
                <ContentWrapper direction="column" align="start" gap={16}>
                    <Icon
                        icon="CheckImage"
                        fill="transparent"
                        color="light_qwhite"
                    />
                    <Flex direction="column" align="start">
                        <Text typo="Headline0b">
                            {user.user?.name}님의 회원가입이
                        </Text>
                        <Text typo="Headline0b">완료되었습니다.</Text>
                        <Text typo="Headline0b">
                            나만의 큐피드를 만들어보세요!
                        </Text>
                    </Flex>
                </ContentWrapper>
                <ButtonFillLarge
                    state="active"
                    text="다음"
                    onClick={() => router.push("/")}
                />
            </Flex>
        </Flex>
    );
};

const ContentWrapper = styled(Flex)`
    padding-top: 66px;
`;

export default Complete;
