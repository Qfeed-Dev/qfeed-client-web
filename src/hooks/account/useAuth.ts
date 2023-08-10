import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { setAccessToken } from "src/utils/cookie";
import { qFeedAxios } from "src/apis/axios";
import { useUserQuery } from "./useUserQuery";
import { useIsActive } from "../common/useIsActive";

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
    // const user = useUserQuery();
    // const isActive = useIsActive({ ...user.data });

    const kakaoMutation = useMutation(getAccessToken, {
        onSuccess: (data: any) => {
            setAccessToken(data.accessToken);
            router.push("/sign-up/default");
            // isActive ? router.push("/") : router.push("/sign-up/default");
        },
        onError: (error: any) => {
            alert(error);
        }
    });

    return {
        kakaoMutation
    };
};
