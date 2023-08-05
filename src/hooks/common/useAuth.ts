import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { setAccessToken } from "src/utils/cookie";
import { qFeedAxios } from "src/apis/axios";

const getAccessToken = async (code: string) => {
    const response = await qFeedAxios.get(
        `/account/kakao/callback?code=${code}`
    );
    return response.data;
};

export const useAuth = () => {
    const router = useRouter();

    // 로그인
    const kakaoMutation = useMutation(getAccessToken, {
        onSuccess: async (data: any) => {
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
