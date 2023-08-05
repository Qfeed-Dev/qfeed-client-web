"use client";
import Link from "next/link";
import Flex from "src/components/common/Flex";
import Text from "src/components/common/Text";

const KaKaoLogin = () => {
    return (
        <Flex direction="column" gap={24}>
            <Text typo="Headline2b">로그인</Text>

            <Link
                href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`}
            >
                <Text typo="Subtitle1r">카카오 로그인</Text>
            </Link>
            <Text typo="Subtitle1r">네이버 로그인</Text>
            <Text typo="Subtitle1r">애플 로그인</Text>
        </Flex>
    );
};

export default KaKaoLogin;
