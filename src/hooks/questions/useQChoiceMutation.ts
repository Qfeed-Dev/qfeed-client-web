import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postQuestionsIdChoices } from "src/apis/questions";
import { questionKeys } from "src/constants/queryKeys/questionKeys";

const useQChoiceMutation = (questionId: number) => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation(
        (choice: string) => postQuestionsIdChoices(questionId, choice),
        {
            onSuccess: () => {
                setTimeout(() => {
                    queryClient.invalidateQueries(
                        questionKeys.detail(questionId)
                    );
                }, 1000);
            },
            onError: (error: any) => {
                console.log(error);
            }
        }
    );
    return { mutate };
};

export default useQChoiceMutation;
