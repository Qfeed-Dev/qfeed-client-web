import { useMutation, useQueryClient } from "@tanstack/react-query";
import { passQuestionsQSet } from "src/apis/questions";
import { QSetCursorKeys } from "src/constants/queryKeys/questionKeys";

const usePassQsetMutation = () => {
    const queryClient = useQueryClient();

    return useMutation(passQuestionsQSet, {
        onSuccess: () => {
            queryClient.invalidateQueries(QSetCursorKeys.all);
        },
        onError: (error: any) => {
            console.log(error);
        }
    });
};

export default usePassQsetMutation;
