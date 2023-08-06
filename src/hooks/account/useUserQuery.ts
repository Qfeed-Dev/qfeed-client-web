import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { qFeedAxios } from "src/apis/axios";
import { userKeys } from "src/constants/accountKeys";
import { getCookie } from "src/utils/cookie";

interface User {
    id: number;
    email: string;
    nickname: string;
    schoolType: string;
    schoolName: string;
    grade: string;
    class: string;
    gender: string;
    birthday: string;
    profileImage: string;
    idCardImage: string;
}

const getUser = async () => {
    const response = await qFeedAxios.get("/account/me", {
        headers: {
            JWT: getCookie()
        }
    });
    return response.data;
};

export const useUserQuery = () => {
    return useQuery<User>(userKeys.all, getUser, {
        onError: (error: any) => {
            alert(error);
        }
    });
};
