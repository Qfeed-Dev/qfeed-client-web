import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import { Qtype } from "src/models/questions";
import { questionKeys } from "src/constants/queryKeys/questionKeys";
import { getUserQuestions } from "src/apis/questions";

const useGetUserQQuery = (id: number, qtype: Qtype) => {
    const { data, fetchNextPage, hasNextPage, isFetched } = useInfiniteQuery(
        questionKeys.qtype(id, qtype),
        ({ pageParam = 0 }) => getUserQuestions(id, qtype, pageParam, 10),
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

export default useGetUserQQuery;
