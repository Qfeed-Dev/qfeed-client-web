"use client";

import styled from "styled-components";
import { Text } from "src/components/common/Text";
import Flex from "src/components/common/Flex";

import ButtonFillLarge from "src/components/buttons/button-fill-large";
import { colors } from "styles/theme";

interface Props {}

const Hint = ({}: Props) => {
    return (
        <HintWrapper direction="column" gap={30}>
            <Flex justify="space-between">
                <Text typo="Subtitle2b" color="light_qwhite">
                    02년생 여자 힌트
                </Text>
                <div>아이콘</div>
            </Flex>
            <Flex direction="column" gap={8}>
                <Text typo="Subtitle1r" color="light_qwhite">
                    상대방 이름의 초성을 알 수 있어요.
                </Text>
                <MainText typo="Subtitle2b" color="light_qwhite">
                    힌트를 보고 투표한 사람을 유추할 수 있어요.
                </MainText>
            </Flex>
            <Flex direction="column" gap={8}>
                <HintItem justify="space-between">
                    <Text typo="Subtitle2b">30 코인</Text>
                    <Text typo="Subtitle2b">힌트 보기</Text>
                </HintItem>
                <ButtonFillLarge
                    state="active"
                    text="코인 충전하기"
                    onClick={() => {}}
                    bottom={false}
                />
                <ButtonFillLarge
                    text="뒤로가기"
                    onClick={() => {}}
                    bottom={false}
                />
            </Flex>
        </HintWrapper>
    );
};

const HintWrapper = styled(Flex)``;

const HintItem = styled(Flex)`
    height: 52px;
    padding: 1rem;
    background: ${colors.primary_qred};
    border-radius: 10px;
`;

const MainText = styled(Text)`
    width: 164px;
    text-align: center;
`;

export default Hint;
