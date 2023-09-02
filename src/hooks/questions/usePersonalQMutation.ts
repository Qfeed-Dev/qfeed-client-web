import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postQuestions } from "src/apis/questions";
import { questionKeys } from "src/constants/queryKeys/questionKeys";
import { Question } from "src/models/questions";

const usePersonalQMutation = () => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation((newQ: Question) => postQuestions(newQ), {
        onSuccess: () => {
            queryClient.invalidateQueries(questionKeys.all);
        },
        onError: () => {
            console.log("createPost error");
        }
    });
    return { mutate };
};

export default usePersonalQMutation;
