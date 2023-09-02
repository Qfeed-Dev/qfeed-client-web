import { useQuery } from "@tanstack/react-query";
import { getQuestions } from "src/apis/questions";
import { questionKeys } from "src/constants/queryKeys/questionKeys";

export const useGetQuestions = () => {
    const { data, isLoading, error, refetch } = useQuery(
        questionKeys.all,
        async () => {
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
