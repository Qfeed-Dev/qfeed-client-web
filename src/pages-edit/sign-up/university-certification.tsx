"use client";
import { useRouter } from "next/navigation";
import ButtonFillLarge from "src/components/buttons/button-fill-large";
import Flex from "src/components/common/Flex";
import NavigationTop from "src/components/navigations/NavigationTopBack";
import Icon from "src/components/Icon/Icon";

const UnivCertification = () => {
    const router = useRouter();

    return (
        <Flex direction="column" justify="start" gap={40}>
            <NavigationTop
                leftIcon={<Icon icon="LeftArrow" onClick={router.back} />}
                title="회원 가입"
            />
            <Flex direction="column" gap={24}>
                {/* <ButtonFillLarge
                    state="active"
                    text="학교 이메일로 인증하기"
                    onClick={() => router.push("/sign-up/email")}
                    bottom={false}
                /> */}
                <ButtonFillLarge
                    state="active"
                    text="학생증으로 인증하기"
                    onClick={() => router.push("/auth/id-card")}
                    bottom={false}
                />
            </Flex>
        </Flex>
    );
};

export default UnivCertification;
