import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { qFeedAxios } from "src/apis/axios";
import { nicknameKeys } from "src/constants/accountKeys";

interface CheckNickname {
    nickname: string;
    abailable: boolean;
    message: string;
}

const getNickname = async (nickname: string) => {
    const response = await qFeedAxios.get("/account/check-nickname", {
        params: {
            nickname: nickname
        }
    });
    return response.data;
};

export const useCheckNicknameQuery = (nickname: string) => {
    return useQuery<CheckNickname>(
        nicknameKeys.all,
        () => getNickname(nickname),
        {
            onError: (error: any) => {
                alert(error);
            }
        }
    );
};
