"use client";
import styled from "styled-components";
import Link from "next/link";
import Flex from "src/components/common/Flex";
import Text from "src/components/common/Text";
import { colors } from "styles/theme";
import Icon from "src/components/Icon";
import AppleLogin from "react-apple-login";
import { useEffect, useState } from "react";

const Login = () => {
    const [userAgent, setUserAgent] = useState("");

    useEffect(() => {
        if (typeof window !== undefined) {
            setUserAgent(navigator.userAgent.toLowerCase());
        }
    }, []);

    console.log(process.env.NEXT_PUBLIC_APPLE_CLIENT_ID);
    console.log(process.env.NEXT_PUBLIC_APPLE_REDIRECT_URI);

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
                        <Icon icon="AuthKakao" />
                    </LoginButton>
                    <ButtonWrapper>
                        {/* {userAgent.indexOf("android") === -1 && ( */}
                        <AppleLogin
                            clientId={
                                process.env.NEXT_PUBLIC_APPLE_CLIENT_ID
                                    ? process.env.NEXT_PUBLIC_APPLE_CLIENT_ID
                                    : ""
                            }
                            redirectURI={
                                process.env.NEXT_PUBLIC_APPLE_REDIRECT_URI
                                    ? process.env.NEXT_PUBLIC_APPLE_REDIRECT_URI
                                    : ""
                            }
                            responseType={"code id_token"}
                            responseMode={"fragment"}
                            usePopup={false}
                            state={"signin"}
                        />
                        {/* )} */}
                    </ButtonWrapper>
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
    max-width: 318px;
    min-height: 56px;

    background: ${(props) => props.background};
    text-align: center;
    border-radius: 11px;
`;

const ButtonWrapper = styled.div`
    #appleid-signin {
        margin-top: 16px;
        position: relative;
        svg {
            display: none;
        }
    }
    #appleid-signin::before {
        content: url("/assets/authApple.svg");
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

export default Login;
