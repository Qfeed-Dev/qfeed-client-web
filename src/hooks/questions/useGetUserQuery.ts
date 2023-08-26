import { useQuery } from "@tanstack/react-query";

import { Qtype } from "src/models/questions";
import { questionKeys } from "src/constants/queryKeys/questionKeys";
import { getUserQuestions } from "src/apis/questions";

const useGetUsersQuery = (id: number, qtype: Qtype) => {
    const {
        data: questions,
        isLoading,
        refetch
    } = useQuery<any>(
        questionKeys.detail(id),
        () => getUserQuestions(id, qtype),
        {
            onError: (error: any) => {
                alert(error);
            }
        }
    );

    return { questions, isLoading, refetch };
};

export default useGetUsersQuery;
