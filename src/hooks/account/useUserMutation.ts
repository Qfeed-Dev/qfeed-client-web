import { useMutation, useQueryClient } from "@tanstack/react-query";
import { qFeedAxios } from "src/apis/axios";
import { userKeys } from "src/constants/accountKeys";
import { getCookie } from "src/utils/cookie";

interface User {
    email?: string;
    nickname?: string;
    schoolType?: string;
    schoolName?: string;
    grade?: string;
    class?: string;
    gender?: string;
    birthday?: Date;
    profileImage?: string;
    idCardImage?: string;
}

const patchUser = async (user: User) => {
    const response = await qFeedAxios.patch(
        "/account/me",
        { ...user },
        {
            headers: {
                Authorization: `Bearer ${getCookie()}`
            }
        }
    );
    return response.data;
};

export const useUserMutation = () => {
    const queryClient = useQueryClient();

    const userMutation = useMutation(patchUser, {
        onSuccess: (data: any) => {
            queryClient.invalidateQueries(userKeys.all);
        },
        onError: (error: any) => {
            alert(error);
        }
    });

    return {
        userMutation
    };
};
