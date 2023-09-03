import { useQuery } from "@tanstack/react-query";
import chatAPI from "src/apis/chatting";
import { chatKeys } from "src/constants/queryKeys/chatKeys";

export const useChatsQuery = ({ chatroomId }: { chatroomId: number }) => {
    const { data, isLoading, error, refetch } = useQuery(
        chatKeys.detail(chatroomId),
        () => chatAPI.getChatroomChats(chatroomId)
    );

    return { data, isLoading, error, refetch };
};
