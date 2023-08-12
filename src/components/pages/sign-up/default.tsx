"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ButtonFillLarge from "src/components/buttons/button-fill-large";
import Flex from "src/components/common/Flex";
import InputLine from "src/components/inputs/input-line";
import NavigationTop from "src/components/navigations/navigation-top";
import ButtonGenderSelect from "src/components/sign-up/button-gender-select";
import { birthMsg, emailMsg, nameMsg, phoneMsg } from "src/constants/messages";
import { useCheckNicknameQuery } from "src/hooks/account/useCheckNicknameQuery";
import { useInput } from "src/hooks/common/useInput";
import { useToggle } from "src/hooks/common/useToggle";
import { useIsActive } from "src/hooks/common/useIsActive";
import { useUserMutation } from "src/hooks/account/useUserMutation";
import {
    validEmail,
    validBirth,
    validPhone
} from "src/hooks/common/useCheckValidation";
import { useUserQuery } from "src/hooks/account/useUserQuery";

const SignIn = () => {
    const router = useRouter();

    const name = useInput();
    const birthday = useInput();
    const phone = useInput();
    const email = useInput();
    const nickname = useInput();

    const gender = useToggle("여");

    const isDupNickname = useCheckNicknameQuery(nickname.value);
    useEffect(() => {
        if (!!nickname.value) {
            isDupNickname.refetch();
        }
    }, [nickname.value]);

    const User = {
        name: name.value,
        gender: gender.value,
        birthday: birthday.value,
        phone: phone.value,
        email: email.value,
        nickname: nickname.value,
        isOk: isDupNickname.data?.abailable
    };

    const { isActive } = useIsActive(User);
    const { userMutation } = useUserMutation();
    const { user } = useUserQuery();

    return (
        <Flex direction="column" justify="start" gap={24}>
            <NavigationTop
                leftIcon={<div onClick={router.back}>왼</div>}
                title="회원 가입"
            />
            <Flex direction="column" justify="start" gap={24}>
                <InputLine
                    value={name.value}
                    onChange={name.handleChangeInput}
                    label="이름"
                    placeholder="ex) 황채린"
                    message={nameMsg.RIGHT}
                />
                <ButtonGenderSelect
                    value={user?.gender || gender.value}
                    onClick={gender.handleChangeState}
                />
                <InputLine
                    value={user?.birthday || birthday.value}
                    onChange={birthday.handleChangeInput}
                    label="생년월일"
                    placeholder="ex) 1997.04.02"
                    message={
                        validBirth(birthday.value)
                            ? birthMsg.RIGHT
                            : birthMsg.WRONG
                    }
                    isError={!validBirth(birthday.value)}
                    readonly={Boolean(user?.birthday)}
                />
                <InputLine
                    value={phone.value}
                    onChange={phone.handleChangeInput}
                    label="휴대폰 번호"
                    placeholder="ex) 010-5016-5886"
                    message={
                        validPhone(phone.value)
                            ? phoneMsg.RIGHT
                            : phoneMsg.WRONG
                    }
                    isError={!validPhone(phone.value)}
                />
                <InputLine
                    value={user?.email || email.value}
                    onChange={email.handleChangeInput}
                    label="이메일"
                    placeholder="ex) ghkdcofls42@naver.com"
                    message={
                        validEmail(email.value)
                            ? emailMsg.RIGHT
                            : emailMsg.WRONG
                    }
                    isError={!validEmail(email.value)}
                    readonly={Boolean(user?.email)}
                />
                <Flex align="end" gap={12}>
                    <InputLine
                        value={user?.nickname || nickname.value}
                        onChange={nickname.handleChangeInput}
                        label="닉네임"
                        placeholder="ex) qwerk11"
                        message={isDupNickname.data?.message}
                        isError={!isDupNickname.data?.abailable}
                        readonly={Boolean(user?.nickname)}
                    />
                </Flex>
                <ButtonFillLarge
                    state={isActive(User) ? "active" : "disabled"}
                    text="다음"
                    onClick={() => {
                        userMutation.mutate({
                            gender: gender.value,
                            birthday: new Date(birthday.value),
                            nickname: nickname.value,
                            email: email.value
                        });
                        router.push("/sign-up/organization");
                    }}
                />
            </Flex>
        </Flex>
    );
};

export default SignIn;
