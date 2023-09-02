"use client";

import ButtonFillLarge from "src/components/buttons/button-fill-large";
import NavigationTopBack from "src/components/navigations/NavigationTopBack";
import { useRouter } from "next/navigation";
import Text from "src/components/common/Text";
import Flex from "src/components/common/Flex";

const Page = () => {
    const router = useRouter();
    return (
        <Flex
            height="100%"
            direction="column"
            justify="space-between"
            style={{ padding: "0 1rem" }}
        >
            <NavigationTopBack />
            <Flex
                height={400}
                direction="column"
                gap={8}
                style={{ textAlign: "center" }}
            >
                <Text typo="Headline1b">
                    잠시 연결이 <br />
                    불안해요
                </Text>
                <Text typo="Subtitle2r">조금 뒤 다시 접속해주세요.</Text>
            </Flex>
            <ButtonFillLarge
                state="active"
                text="홈으로 가기"
                onClick={() => router.push("/")}
            />
        </Flex>
    );
};

export default Page;
