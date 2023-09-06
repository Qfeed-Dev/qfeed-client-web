import { useQuery } from "@tanstack/react-query";
import { getQuestionChoiceCount } from "src/apis/questions";
import { questionCountKeys } from "src/constants/queryKeys/questionKeys";
import { Qtype } from "src/models/questions";

export const useGetQuestionCount = (qtype: Qtype) => {
    const { data, isLoading, error, refetch } = useQuery(
        questionCountKeys.qtype(qtype),
        () => getQuestionChoiceCount(qtype)
    );

    return { data, isLoading, error, refetch };
};
