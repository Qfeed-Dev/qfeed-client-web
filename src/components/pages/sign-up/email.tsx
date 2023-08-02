"use client";
import { useRouter } from "next/navigation";
import ButtonFillLarge from "src/components/buttons/button-fill-large";
import ButtonFillSmall from "src/components/buttons/button-fill-small";
import Flex from "src/components/common/Flex";
import InputLine from "src/components/inputs/input-line";
import NavigationTop from "src/components/navigations/navigation-top";
import ButtonGenderSelect from "src/components/sign-up/button-gender-select";
import { useInput } from "src/hooks/common/useInput";

const SignIn = () => {
    const router = useRouter();
    const email = useInput();

    return (
        <Flex direction="column" justify="start" gap={40}>
            <NavigationTop
                leftIcon={<div onClick={router.back}>왼</div>}
                title="회원 가입"
            />
            <InputLine
                value={email.value}
                onChange={email.handleChangeInput}
                label="학교 이메일"
                placeholder="ex) ghkdcofls42@naver.com"
            />
            <ButtonFillLarge
                state="disabled"
                text="인증번호 보내기"
                onClick={() => router.push("/")}
            />
        </Flex>
    );
};

export default SignIn;
