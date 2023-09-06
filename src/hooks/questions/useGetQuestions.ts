import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getQuestions } from "src/apis/questions";
import { questionKeys } from "src/constants/queryKeys/questionKeys";

export const useGetQuestions = () => {
    const { data, fetchNextPage, hasNextPage, isFetched } = useInfiniteQuery(
        questionKeys.all,
        ({ pageParam = 0 }) => getQuestions(pageParam, 10),
        {
            getNextPageParam: (lastPage) => {
                return lastPage.data.count > lastPage.idx + 10
                    ? lastPage.idx + 10
                    : undefined;
            }
        }
    );

    return { data, fetchNextPage, hasNextPage, isFetched };
};
