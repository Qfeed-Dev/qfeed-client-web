"use client";
import styled from "styled-components";
import Link from "next/link";
import Flex from "src/components/common/Flex";
import Text from "src/components/common/Text";
import { colors } from "styles/theme";

const Login = () => {
    return (
        <Background direction="column" justify="center" height="100%">
            <LoginWrapper direction="column" height="100%" gap={34}>
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
                    <LoginButton href={""} background="white">
                        <Text typo="Subtitle1b" color="light_qblack">
                            애플 로그인
                        </Text>
                    </LoginButton>
                </Flex>
            </LoginWrapper>
        </Background>
    );
};

const Background = styled(Flex)`
    width: 100%;
    height: 100%;

    background-image: url(${process.env.PUBLIC_URL}/img/background.png);
    background-size: cover;
    background-position: center;
`;

const LoginWrapper = styled(Flex)`
    padding: 0 1rem;

    background: ${colors.line_black_50};
    -webkit-backdrop-filter: blur(7.5px);
    backdrop-filter: blur(7.5px);
`;

const LoginButton = styled(Link)<{ background: string }>`
    width: 100%;
    min-height: 52px;
    padding: 0.88rem 3.75rem;

    background: ${(props) => props.background};
    text-align: center;
    border-radius: 11px;
`;

export default Login;
