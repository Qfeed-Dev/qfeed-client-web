"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ButtonFillLarge from "src/components/buttons/button-fill-large";
import Flex from "src/components/common/Flex";
import InputLine from "src/components/inputs/input-line";
import NavigationTop from "src/components/navigations/NavigationTop";
import ButtonGenderSelect from "src/pages-edit/sign-up/components/button-gender-select";
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
import Icon from "src/components/Icon/Icon";

const SignIn = () => {
    const router = useRouter();
    const { userMutation } = useUserMutation();
    const { user } = useUserQuery();

    const name = useInput(user?.name);
    const birthday = useInput(user?.birthday?.split("T")[0]);
    const phone = useInput(user?.phone);
    const email = useInput(user?.email);
    const nickname = useInput(user?.nickname);
    const gender = useToggle(user?.gender || "여");

    const isDupNickname = useCheckNicknameQuery(nickname.value);
    useEffect(() => {
        if (!!nickname.value && nickname.value !== "") {
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
        isOk:
            (user?.nickname || isDupNickname.data?.available) &&
            validEmail(email.value) &&
            validBirth(birthday.value) &&
            validPhone(phone.value)
    };

    const [isActive, setIsActive] = useState<boolean>(false);

    useEffect(() => {
        const isActive = useIsActive(User);
        setIsActive(isActive || false);
    }, [User]);

    return (
        <Flex direction="column" justify="start" gap={24}>
            <NavigationTop
                leftIcon={
                    <Icon
                        icon="LeftArrow"
                        onClick={() => router.push("/account")}
                    />
                }
                title="회원 가입"
            />
            <Flex direction="column" justify="start" gap={24}>
                <InputLine
                    value={name.value}
                    onChange={name.handleChangeInput}
                    label="이름"
                    placeholder="ex) 홍길동"
                    message={nameMsg.RIGHT}
                />
                <ButtonGenderSelect
                    value={gender.value}
                    onClick={gender.handleChangeState}
                />
                <InputLine
                    value={birthday.value}
                    onChange={birthday.handleChangeInput}
                    label="생년월일"
                    placeholder="ex) 2005-01-01"
                    message={
                        user?.birthday
                            ? undefined
                            : validBirth(birthday.value)
                            ? birthMsg.RIGHT
                            : birthMsg.WRONG
                    }
                    isError={!validBirth(birthday.value)}
                />
                <InputLine
                    value={phone.value}
                    onChange={phone.handleChangeInput}
                    label="휴대폰 번호"
                    placeholder="ex) 01012345678"
                    message={
                        validPhone(phone.value)
                            ? phoneMsg.RIGHT
                            : phoneMsg.WRONG
                    }
                    isError={!validPhone(phone.value)}
                />
                <InputLine
                    value={email.value}
                    onChange={email.handleChangeInput}
                    label="이메일"
                    placeholder="ex) qfeed@naver.com"
                    message={
                        user?.email
                            ? undefined
                            : validEmail(email.value)
                            ? emailMsg.RIGHT
                            : emailMsg.WRONG
                    }
                    isError={!validEmail(email.value)}
                />
                <Flex align="end" gap={12}>
                    <InputLine
                        value={nickname.value}
                        onChange={nickname.handleChangeInput}
                        label="닉네임"
                        placeholder="ex) qfeed"
                        message={
                            user?.nickname
                                ? undefined
                                : isDupNickname.data?.message
                        }
                        isError={!isDupNickname.data?.available}
                    />
                </Flex>
                <ButtonFillLarge
                    state={isActive ? "active" : "disabled"}
                    text="다음"
                    onClick={() => {
                        userMutation.mutate({
                            name: name.value,
                            gender: gender.value,
                            birthday: birthday.value,
                            nickname: nickname.value,
                            email: email.value,
                            phone: phone.value
                        });
                        router.push("/auth/organization");
                    }}
                />
            </Flex>
        </Flex>
    );
};

export default SignIn;
