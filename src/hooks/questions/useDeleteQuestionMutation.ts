import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteQuestions } from "src/apis/questions";
import { questionKeys } from "src/constants/queryKeys/questionKeys";

const useDeleteQuestionMutation = () => {
    const queryClient = useQueryClient();
    const deleteQMutation = useMutation(
        (questionId: number) => deleteQuestions(questionId),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(questionKeys.all);
            },
            onError: () => {}
        }
    );
    return { deleteQMutation };
};

export default useDeleteQuestionMutation;
