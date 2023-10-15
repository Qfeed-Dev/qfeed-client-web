import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import accountAPI from "src/apis/account";
import { friendKeys } from "src/constants/queryKeys/accountKeys";

const useBlockFriendMutation = () => {
    const queryClient = useQueryClient();
    const router = useRouter();

    return useMutation((id: number) => accountAPI.blockFriend({ id }), {
        onSuccess: (data: any, id: number) => {
            queryClient.invalidateQueries(friendKeys.detail(id));
            router.back();
        },
        onError: (error: any) => {}
    });
};

export default useBlockFriendMutation;
