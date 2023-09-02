import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createQset } from "src/apis/questions";
import { QSetCursorKeys } from "src/constants/queryKeys/questionKeys";

const useQsetMutation = () => {
    const queryClient = useQueryClient();

    return useMutation(createQset, {
        onSuccess: () => {
            queryClient.invalidateQueries(QSetCursorKeys.all);
        },
        onError: (error: any) => {
            console.log(error);
        }
    });
};

export default useQsetMutation;
