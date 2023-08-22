import { useQuery } from "@tanstack/react-query";
import { getQuestionsId } from "src/apis/questions";

export const useGetQuestionsId = ({ questionId }: any) => {
    const { data, isLoading, error, refetch } = useQuery(
        [],
        async () => {
            const result = getQuestionsId(questionId);
            // console.log(result);
            return result;
        },
        {
            staleTime: 1000 * 60 * 5,
            cacheTime: 1000 * 60 * 30
        }
    );

    return { data, isLoading, error, refetch };
};
