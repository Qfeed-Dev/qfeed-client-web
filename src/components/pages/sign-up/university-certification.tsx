"use client";
import { useRouter } from "next/navigation";
import ButtonFillLarge from "src/components/buttons/button-fill-large";
import Flex from "src/components/common/Flex";
import NavigationTop from "src/components/navigations/navigation-top";

const UnivCertification = () => {
    const router = useRouter();

    return (
        <Flex direction="column" justify="start" gap={40}>
            <NavigationTop
                leftIcon={<div onClick={router.back}>왼</div>}
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
                    onClick={() => router.push("/sign-up/id-card")}
                    bottom={false}
                />
            </Flex>
        </Flex>
    );
};

export default UnivCertification;
