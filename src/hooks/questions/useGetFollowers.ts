import { useQuery } from "@tanstack/react-query";
import accountAPI from "src/apis/account";

export const useGetFollowers = () => {
    const { data, isLoading, error, refetch } = useQuery(
        [],
        async () => {
            const params: any = {};
            const result = await accountAPI.getFollowers();
            return result;
        },
        {
            staleTime: 1000 * 60 * 5,
            cacheTime: 1000 * 60 * 30
        }
    );

    return { data, isLoading, error, refetch };
};

export default useGetFollowers;
