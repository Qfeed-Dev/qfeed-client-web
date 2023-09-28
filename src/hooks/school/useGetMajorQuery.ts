import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import schoolAPI from "src/apis/school";

const useGetMajorQuery = (word: string) => {
    // const { data, fetchNextPage, hasNextPage, isFetched } = useInfiniteQuery(
    //     ["school"],
    //     ({ pageParam = 0 }) => getUserQuestions(id, qtype, pageParam, 10),
    //     {
    //         getNextPageParam: (lastPage) => {
    //             return lastPage.data.count > lastPage.idx + 10
    //                 ? lastPage.idx + 10
    //                 : undefined;
    //         }
    //     }
    // );

    // return { data, fetchNextPage, hasNextPage, isFetched };
    const { data, isLoading, refetch } = useQuery(
        ["major"],
        () => schoolAPI.getMajorName(word),
        {
            onError: (error: any) => {
                alert(error);
            }
        }
    );

    return { data, isLoading, refetch };
};

export default useGetMajorQuery;
