"use client";
import { useSearchParams } from "next/navigation";
import { useAuth } from "src/hooks/common/useAuth";

const KakaoLoginCallback = () => {
    const searchParams = useSearchParams();
    const code = searchParams.get("code");
    const { kakaoMutation } = useAuth();

    if (code) {
        kakaoMutation.mutate(code);
    }

    return <></>;
};

export default KakaoLoginCallback;
