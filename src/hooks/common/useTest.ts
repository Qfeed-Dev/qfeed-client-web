import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { setAccessToken } from "src/utils/cookie";
import { qFeedAxios } from "src/apis/axios";

const getTest = async () => {
    const response = await qFeedAxios.get(`/ping`);
    return response.data;
};

export const useTest = () => {
    // 로그인
    const { data } = useQuery(["test"], getTest, {
        onSuccess: async () => {
            console.log("성공!");
        },
        onError: (error: any) => {
            alert(error);
        }
    });
    return data;
};
