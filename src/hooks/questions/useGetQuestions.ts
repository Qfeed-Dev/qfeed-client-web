import { useQuery } from "@tanstack/react-query";
import { getQuestions } from "src/apis/questions";
import { questionKeys } from "src/constants/queryKeys/questionKeys";
import { Questions } from "src/models/questions";

export const useGetQuestions = () => {
    const { data, isLoading, error, refetch } = useQuery<Questions>(
        questionKeys.all,
        () => getQuestions(1, 100)
    );

    return { data, isLoading, error, refetch };
};
