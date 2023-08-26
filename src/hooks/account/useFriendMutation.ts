import { useMutation, useQueryClient } from "@tanstack/react-query";
import accountAPI from "src/apis/account";

const useFriendMutation = (id: number) => {
    const queryClient = useQueryClient();

    const friendMutation = useMutation(
        () => accountAPI.createFollowing({ id }),
        {
            onSuccess: (data: any) => {
                // queryClient.invalidateQueries();
            },
            onError: (error: any) => {}
        }
    );

    return {
        friendMutation
    };
};

export default useFriendMutation;
