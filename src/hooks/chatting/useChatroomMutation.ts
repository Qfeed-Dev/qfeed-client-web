import { useMutation, useQueryClient } from "@tanstack/react-query";
import chatAPI from "src/apis/chatting";
import { chatRoomKeys } from "src/constants/queryKeys/chatKeys";

const useChatroomMutation = (targetUserId: number, title: string) => {
    const queryClient = useQueryClient();

    const { mutate } = useMutation(
        () =>
            chatAPI.postChatroom({ targetUserId: targetUserId, title: title }),
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
