import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createQset } from "src/apis/questions";
import { QSetCursorKeys } from "src/constants/queryKeys/questionKeys";
import useQsetCursorQuery from "./useQsetCursorQuery";

const useQsetMutation = () => {
    const queryClient = useQueryClient();
    const cursor = useQsetCursorQuery();

    return useMutation(createQset, {
        onSuccess: () => {
            queryClient.invalidateQueries(QSetCursorKeys.all);
        },
        onError: (error: any) => {
            if (error === "AxiosError: Request failed with status code 404") {
                return 0;
            }
        }
    });
};

export default useQsetMutation;
