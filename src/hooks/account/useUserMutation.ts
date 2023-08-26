import { useMutation, useQueryClient } from "@tanstack/react-query";
import { User } from "src/models/account";
import { qFeedAxios } from "src/apis/axios";
import { userKeys } from "src/constants/queryKeys/accountKeys";
import { getCookie } from "src/utils/cookie";

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
        onSuccess: (data: User) => {
            queryClient.invalidateQueries(userKeys.all);
        },
        onError: (error: any) => {}
    });

    return {
        userMutation
    };
};
