"use client";
import Link from "next/link";
import Flex from "src/components/common/Flex";
import Text from "src/components/common/Text";
import styled from "styled-components";

const Login = () => {
    return (
        <Flex direction="column" justify="center" height="100%" gap={34}>
            <Flex direction="column" gap={15}>
                <Text typo="Subtitle2r">QUESTION FEED</Text>
                <Text typo="Headline0b">LOG IN</Text>
            </Flex>
            <Flex direction="column" gap={16}>
                <LoginButton
                    href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`}
                    background="#FEE500"
                >
                    <Text typo="Subtitle1b" color="light_qblack">
                        카카오 로그인
                    </Text>
                </LoginButton>
                <LoginButton background="#03C75A" href={""}>
                    <Text typo="Subtitle1b" color="light_qwhite">
                        네이버 로그인
                    </Text>
                </LoginButton>
                <LoginButton background="white" href={""}>
                    <Text typo="Subtitle1b" color="light_qblack">
                        애플 로그인
                    </Text>
                </LoginButton>
            </Flex>
        </Flex>
    );
};

const LoginButton = styled(Link)<{ background: string }>`
    width: 100%;
    min-height: 52px;
    padding: 0.88rem 3.75rem;

    background: ${(props) => props.background};
    text-align: center;
    border-radius: 11px;
`;

export default Login;
