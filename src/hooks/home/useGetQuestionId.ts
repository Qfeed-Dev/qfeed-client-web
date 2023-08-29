import { useQuery } from "@tanstack/react-query";
import { getQuestionsId } from "src/apis/questions";

export const useGetQuestionsId = ({ questionId }: any) => {
    const { data, isLoading, error, refetch } = useQuery(
        [questionId],
        async () => {
            const result = getQuestionsId(questionId);
            return result;
        }
    );

    return { data, isLoading, error, refetch };
};
