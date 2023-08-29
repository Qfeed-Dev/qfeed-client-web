import { useQuery } from "@tanstack/react-query";
import { getQuestionsId } from "src/apis/questions";
import { questionKeys } from "src/constants/queryKeys/questionKeys";

export const useGetQuestionsId = (questionId: number) => {
    const { data, isLoading, error, refetch } = useQuery(
        questionKeys.detail(questionId),
        async () => {
            const result = getQuestionsId(questionId);
            return result;
        },
        {
            staleTime: 1000 * 60 * 5,
            cacheTime: 1000 * 60 * 30
        }
    );

    return { data, isLoading, error, refetch };
};
