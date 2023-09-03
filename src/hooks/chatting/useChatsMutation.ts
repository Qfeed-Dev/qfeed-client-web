import { useMutation, useQueryClient } from "@tanstack/react-query";
import chatAPI from "src/apis/chatting";
import { chatKeys } from "src/constants/queryKeys/chatKeys";

const useChatsMutation = () => {
    const queryClient = useQueryClient();

    const { mutate } = useMutation(
        (data: { chatroomId: number; message: string }) =>
            chatAPI.postChatroomChats(data),
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
