import { useMutation, useQueryClient } from "@tanstack/react-query";
import chatAPI from "src/apis/chatting";
import { chatRoomKeys } from "src/constants/queryKeys/chatKeys";
import { setChatRoomId } from "src/utils/cookie";

const useChatroomMutation = () => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation(
        (data: { targetUserId: number; title: string }) =>
            chatAPI.postChatroom(data),
        {
            onSuccess: (data: any) => {
                queryClient.invalidateQueries(chatRoomKeys.all);
                setChatRoomId(data.id);
            },
            onError: (error: any) => {}
        }
    );

    return {
        mutate
    };
};

export default useChatroomMutation;
