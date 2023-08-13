import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { setAccessToken } from "src/utils/cookie";
import { qFeedAxios } from "src/apis/axios";

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

    const kakaoMutation = useMutation(getAccessToken, {
        onSuccess: (data: any) => {
            setAccessToken(data.accessToken);
            router.push("/");
        },
        onError: (error: any) => {
            alert(error);
        }
    });

    return {
        kakaoMutation
    };
};
