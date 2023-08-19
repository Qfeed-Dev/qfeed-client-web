import { useQuery } from "@tanstack/react-query";
import { getQuestions } from "src/apis/questions";

export const useGetQuestions = () => {
    const { data, isLoading, error, refetch } = useQuery(
        [location],
        async () => {
            const params: any = {};
            const result = await getQuestions();
            return result;
        },
        {
            staleTime: 1000 * 60 * 5,
            cacheTime: 1000 * 60 * 30
        }
    );

    return { data, isLoading, error, refetch };
};
