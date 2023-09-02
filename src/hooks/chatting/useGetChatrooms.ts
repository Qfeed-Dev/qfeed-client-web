import { useQuery } from "@tanstack/react-query";
import { getChatrooms } from "src/apis/chatting";

export const useGetChatrooms = () => {
    const { data, isLoading, error, refetch } = useQuery(
        [],
        async () => {
            const params: any = {};
            const result = await getChatrooms();
            return result;
        },
        {
            staleTime: 1000 * 60 * 5,
            cacheTime: 1000 * 60 * 30
        }
    );

    return { data, isLoading, error, refetch };
};
