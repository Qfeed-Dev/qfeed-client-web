import { useQuery } from "@tanstack/react-query";

import { Qtype } from "src/models/questions";
import { questionKeys } from "src/constants/queryKeys/questionKeys";
import { getUserQuestions } from "src/apis/questions";

const useGetUserQQuery = (id: number, qtype: Qtype) => {
    const {
        data: questions,
        isLoading,
        refetch
    } = useQuery<any>(
        questionKeys.qtype(id, qtype),
        () => getUserQuestions(id, qtype),
        {
            onError: (error: any) => {
                alert(error);
            }
        }
    );

    return { questions, isLoading, refetch };
};

export default useGetUserQQuery;
