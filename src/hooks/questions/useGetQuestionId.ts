import { useQuery } from "@tanstack/react-query";
import { getQuestionsId } from "src/apis/questions";
import { questionKeys } from "src/constants/queryKeys/questionKeys";
import { QuestionById } from "src/models/questions";

export const useGetQuestionsId = ({ questionId }: { questionId: number }) => {
    const { data, isLoading, error, refetch } = useQuery<QuestionById>(
        questionKeys.detail(questionId),
        async () => {
            const result = getQuestionsId(questionId);
            return result;
        }
    );

    return { data, isLoading, error, refetch };
};
