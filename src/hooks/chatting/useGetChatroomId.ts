import { useQuery } from "@tanstack/react-query";
import { getChatroomChats } from "src/apis/chatting";

export const useGetChatroomChats = ({ chatroomId }: { chatroomId: number }) => {
    const { data, isLoading, error, refetch } = useQuery(
        [chatroomId],
        async () => {
            const result = getChatroomChats(chatroomId);
            return result;
        }
    );

    return { data, isLoading, error, refetch };
};
