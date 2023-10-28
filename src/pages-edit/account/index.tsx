"use client";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import Flex from "src/components/common/Flex";
import Text from "src/components/common/Text";
import { colors } from "styles/theme";

import KakaoLogo from "src/components/Icon/icons/KakaoLogo";
import AppleLogo from "src/components/Icon/icons/AppleLogo";
import AppleLogin from "react-apple-login";

const Login = () => {
    const [userAgent, setUserAgent] = useState("");

    useEffect(() => {
        if (typeof window !== undefined) {
            setUserAgent(navigator.userAgent.toLowerCase());
        }
    }, [navigator]);

    return (
        <Background direction="column" justify="center" height="100%">
            <LoginWrapper direction="column" height="100%" gap={32}>
                <Flex height="80%" direction="column" justify="space-between">
                    <Flex height="50%" direction="column" gap={15}>
                        <Text typo="Subtitle2r">QUESTION FEED</Text>
                        <Text typo="Headline0b">LOG IN</Text>
                    </Flex>

                    <Flex direction="column" gap={16}>
                        <LoginButton
                            href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`}
                            background="#FEE500"
                        >
                            <KakaoLogo />
                            <LoginText>카카오 로그인</LoginText>
                        </LoginButton>
                        {userAgent.indexOf("android") === -1 && (
                            <AppleLogin
                                clientId={"com.qfeed.dev.login"}
                                redirectURI={
                                    "https://dev-qfeed-client-web.vercel.app/account/apple/login"
                                }
                                responseType={"code id_token"}
                                responseMode={"fragment"}
                                usePopup={false}
                                state={"signin"}
                                render={(renderProps) => (
                                    <AppleLoginButton
                                        onClick={renderProps.onClick}
                                    >
                                        <AppleLogo />
                                        <Text color="light_qblack">
                                            APPLE로 로그인
                                        </Text>
                                    </AppleLoginButton>
                                )}
                            />
                        )}
                    </Flex>
                </Flex>
                <UnderText justify="space-around">
                    <Link
                        href={
                            "https://qfeed.notion.site/c113fa22230c4e45a62962e333d11448"
                        }
                    >
                        <Text
                            typo="Caption1r"
                            style={{
                                textDecoration: "underline"
                            }}
                        >
                            이용약관
                        </Text>
                    </Link>
                    <Link
                        href={
                            "https://qfeed.notion.site/7228351001ae4e5385dcad327e4c68a1"
                        }
                    >
                        <Text
                            typo="Caption1r"
                            style={{
                                textDecoration: "underline"
                            }}
                        >
                            개인정보 처리방침
                        </Text>
                    </Link>
                </UnderText>
            </LoginWrapper>
        </Background>
    );
};

const Background = styled(Flex)`
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

    color: rgba(0, 0, 0, 0.85);
    background: ${(props) => props.background};
    text-align: center;
    border-radius: 12px;

    display: flex;

    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

const LoginText = styled.div`
    font-size: 1rem;
    color: black;
`;

const UnderText = styled(Flex)``;

const AppleLoginButton = styled(Flex)`
    width: 100%;
    min-width: 318px;
    min-height: 52px;
    border-radius: 12px;

    #appleid-signin {
        img {
            display: none;
        }
    }

    background: white;

    cursor: pointer;
`;

export default Login;
