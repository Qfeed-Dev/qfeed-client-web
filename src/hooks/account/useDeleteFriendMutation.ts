import { useMutation, useQueryClient } from "@tanstack/react-query";
import accountAPI from "src/apis/account";

const useDeleteFriendMutation = (id: number) => {
    const queryClient = useQueryClient();

    const delFriendMutation = useMutation(
        () => accountAPI.deleteFollowing({ id }),
        {
            onSuccess: (data: any) => {
                // queryClient.invalidateQueries();
            },
            onError: (error: any) => {}
        }
    );

    return {
        delFriendMutation
    };
};

export default useDeleteFriendMutation;
