import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import accountAPI from "src/apis/account";
import { friendKeys, usersKeys } from "src/constants/queryKeys/accountKeys";

const useUnBlockFriendMutation = () => {
    const queryClient = useQueryClient();
    const router = useRouter();

    return useMutation((id: number) => accountAPI.unBlockFriend({ id }), {
        onSuccess: (data: any, id: number) => {
            queryClient.invalidateQueries(friendKeys.all);
            queryClient.invalidateQueries(usersKeys.all);
        },
        onError: (error: any) => {}
    });
};

export default useUnBlockFriendMutation;
