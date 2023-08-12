import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { setAccessToken } from "src/utils/cookie";
import { qFeedAxios } from "src/apis/axios";
import { useUserQuery } from "./useUserQuery";
import { useIsActive } from "../common/useIsActive";
import { useState, useEffect } from "react";

const getAccessToken = async (code: string) => {
    const response = await qFeedAxios.get("/account/kakao/login", {
        params: {
            code: code,
            redirectUrl: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI
        }
    });
    return response.data;
};

export const useAuth = () => {
    const router = useRouter();
    const [isActive, setIsActive] = useState<boolean | undefined>(undefined);

    const kakaoMutation = useMutation(getAccessToken, {
        onSuccess: (data: any) => {
            setAccessToken(data.accessToken);
        },
        onError: (error: any) => {
            alert(error);
        }
    });

    const { user, isLoading } = useUserQuery();
    useEffect(() => {
        if (!kakaoMutation.isLoading && !isLoading && user !== undefined) {
            setIsActive(useIsActive(user));
            isActive ? router.push("/") : router.push("/sign-up/default");
        }
    }, [kakaoMutation.isLoading, isActive, router]);

    return {
        kakaoMutation
    };
};
