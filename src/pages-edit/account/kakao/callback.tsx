"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "src/hooks/account/useAuth";

const KakaoLoginCallback = () => {
    const searchParams = useSearchParams();
    const code = searchParams.get("code");
    const { kakaoMutation } = useAuth();

    useEffect(() => {
        if (code) {
            kakaoMutation.mutate(code);
        }
    }, [code]);

    return <></>;
};

export default KakaoLoginCallback;
