import { useQuery } from "@tanstack/react-query";
import { getQsetCursor } from "src/apis/questions";
import { QSetCursorKeys } from "src/constants/queryKeys/questionKeys";
import { QSetCursor } from "src/models/questions";

const useQsetCursorQuery = () => {
    const {
        data: questionCursor,
        isLoading,
        refetch
    } = useQuery<QSetCursor[]>(QSetCursorKeys.all, getQsetCursor, {
        onError: (error: any) => {
            console.log(error);
        }
    });

    return { questionCursor, isLoading, refetch };
};

export default useQsetCursorQuery;
