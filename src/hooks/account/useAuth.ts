import accountAPI from "../../apis/account";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { setAccessToken } from "src/utils/cookie";
import { qFeedAxios } from "src/apis/axios";

export const useAuth = () => {
    const router = useRouter();

    const kakaoMutation = useMutation(accountAPI.getAccessToken, {
        onSuccess: (data: any) => {
            setAccessToken(data.accessToken, data.expireTime);
            qFeedAxios.interceptors.request.use(
                (config) => {
                    try {
                        config.headers.Authorization = `Bearer ${data.accessToken}`;
                        return config;
                    } catch (err) {}
                    return config;
                },
                (error) => {
                    return Promise.reject(error);
                }
            );
            router.push("/");
        },
        onError: (error: any) => {
            alert(error);
        }
    });

    const appleMutation = useMutation(accountAPI.getAccessTokenApple, {
        onSuccess: (data: any) => {
            console.log(data);
            setAccessToken(data.accessToken, data.expireTime);
            qFeedAxios.interceptors.request.use(
                (config) => {
                    try {
                        config.headers.Authorization = `Bearer ${data.accessToken}`;
                        return config;
                    } catch (err) {}
                    return config;
                },
                (error) => {
                    return Promise.reject(error);
                }
            );
            router.push("/");
        },
        onError: (error: any) => {
            alert(error);
        }
    });

    return {
        kakaoMutation,
        appleMutation
    };
};
