import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createQuestionsQSet } from "src/apis/questions";
import { QSetCursorKeys } from "src/constants/queryKeys/questionKeys";
import { QSet } from "src/models/questions";

const useCreateCharacter = (qsetId: number, choice: QSet) => {
    const queryClient = useQueryClient();

    return useMutation(() => createQuestionsQSet(qsetId, choice), {
        onSuccess: () => {
            queryClient.invalidateQueries(QSetCursorKeys.all);
        },
        onError: (error: any) => {
            console.log(error);
        }
    });
};

export default useCreateCharacter;
