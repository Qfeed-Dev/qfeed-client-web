import { useQuery } from "@tanstack/react-query";
import { getQuestionsId } from "src/apis/questions";
import { questionKeys } from "src/constants/queryKeys/questionKeys";

export const useGetQuestionsId = ({ questionId }: { questionId: number }) => {
    const { data, isLoading, error, refetch } = useQuery(
        [questionId],
        async () => {
            const result = getQuestionsId(questionId);
            return result;
        }
    );

    return { data, isLoading, error, refetch };
};
