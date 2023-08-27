import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { qFeedAxios } from "src/apis/axios";
import { userKeys } from "src/constants/queryKeys/accountKeys";
import { getCookie } from "src/utils/cookie";
import { User } from "src/models/account";

export const getUser = async () => {
    const response = await qFeedAxios.get("/account/me", {
        headers: {
            Authorization: `Bearer ${getCookie()}`
        }
    });
    return response.data;
};

export const useUserQuery = () => {
    const { data: user, isLoading } = useQuery<User>(userKeys.all, getUser, {
        onError: (error: any) => {
            alert(error);
        }
    });

    return { user, isLoading };
};
