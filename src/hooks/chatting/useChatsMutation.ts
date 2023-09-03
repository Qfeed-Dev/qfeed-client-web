import { useMutation, useQueryClient } from "@tanstack/react-query";
import chatAPI from "src/apis/chatting";
import { chatKeys } from "src/constants/queryKeys/chatKeys";

const useChatsMutation = (targetUserId: number, message: string) => {
    const queryClient = useQueryClient();

    const { mutate } = useMutation(
        () => chatAPI.postChatroomChats(targetUserId, message),
        {
            onSuccess: (data: any) => {
                queryClient.invalidateQueries(chatKeys.all);
            },
            onError: (error: any) => {}
        }
    );

    return {
        mutate
    };
};

export default useChatsMutation;
