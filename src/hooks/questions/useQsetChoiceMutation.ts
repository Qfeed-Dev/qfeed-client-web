import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createQuestionsQSet } from "src/apis/questions";

const useCreateCharacter = () => {
    const queryClient = useQueryClient();

    return useMutation(createQuestionsQSet, {
        onSuccess: () => {
            // queryClient.invalidateQueries(characterKeys.all);
        },
        onError: (error: any) => {
            console.log(error);
        }
    });
};

export default useCreateCharacter;
