"use client";
import { useRouter } from "next/navigation";
import ButtonFillLarge from "src/components/buttons/button-fill-large";
import NavigationTop from "src/components/navigations/navigation-top";

import Text from "src/components/common/Text";
import Flex from "src/components/common/Flex";
import styled from "styled-components";
import { colors } from "styles/theme";

const IdCard = () => {
    const router = useRouter();

    return (
        <Flex
            height="100%"
            direction="column"
            justify="start"
            align="start"
            gap={66}
        >
            <NavigationTop
                leftIcon={<div onClick={router.back}>왼</div>}
                title="회원 가입"
            />
            <Flex
                height="100%"
                direction="column"
                justify="start"
                align="start"
                gap={16}
            >
                <Text typo="Subtitle1r">학생증 인증</Text>
                <Card></Card>
                <Text typo="Caption2r" color="light_gray2">
                    *가로로 어두운 배경에서 촬영하세요.
                    <br />
                    *빛 반사에 주의하세요.
                </Text>
            </Flex>
            <ButtonFillLarge
                state="disabled"
                text="다음"
                onClick={() => router.push("/")}
            />
        </Flex>
    );
};

const Card = styled.div`
    width: 100%;
    height: 14rem;

    border-radius: 10px;
    background: ${colors.line_white_30};
`;

export default IdCard;
