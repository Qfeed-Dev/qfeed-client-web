"use client";
import { useRouter } from "next/navigation";
import ButtonFillLarge from "src/components/buttons/button-fill-large";
import NavigationTop from "src/components/navigations/navigation-top";

import Text from "src/components/common/Text";
import Flex from "src/components/common/Flex";

const Complete = () => {
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
                justify="space-between"
                align="start"
            >
                <Text typo="Headline0b">
                    채린님의 회원가입이
                    <br />
                    완료되었습니다.
                    <br />
                    나만의 큐피드를 만들어보세요!
                </Text>
                <ButtonFillLarge
                    state="active"
                    text="다음"
                    onClick={() => router.push("/")}
                />
            </Flex>
        </Flex>
    );
};

export default Complete;
