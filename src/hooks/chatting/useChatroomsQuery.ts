import { useQuery } from "@tanstack/react-query";
import chatAPI from "src/apis/chatting";
import { chatRoomKeys } from "src/constants/queryKeys/chatKeys";

export const useChatroomsQuery = () => {
    const { data, isLoading, error, refetch } = useQuery(
        chatRoomKeys.all,
        chatAPI.getChatrooms,
        {
            staleTime: 1000 * 60 * 5,
            cacheTime: 1000 * 60 * 30
        }
    );

    return { data, isLoading, error, refetch };
};
