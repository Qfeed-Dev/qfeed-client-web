import { useMutation, useQueryClient } from "@tanstack/react-query";
import chatAPI from "src/apis/chatting";
import { chatRoomKeys } from "src/constants/queryKeys/chatKeys";

const useChatroomMutation = () => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation(
        (data: { targetUserId: number; title: string }) =>
            chatAPI.postChatroom(data),
        {
            onSuccess: (data: any) => {
                queryClient.invalidateQueries(chatRoomKeys.all);
            },
            onError: (error: any) => {}
        }
    );

    return {
        mutate
    };
};

export default useChatroomMutation;
