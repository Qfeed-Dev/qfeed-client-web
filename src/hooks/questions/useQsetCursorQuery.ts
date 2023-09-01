import { useQuery } from "@tanstack/react-query";
import { getQsetCursor } from "src/apis/questions";
import { QSetCursorKeys } from "src/constants/queryKeys/questionKeys";
import { QSetCursor } from "src/models/questions";

const useQsetCursorQuery = () => {
    const {
        data: questionCursor,
        isLoading,
        refetch
    } = useQuery<QSetCursor[]>(QSetCursorKeys.all, getQsetCursor);

    return { questionCursor, isLoading, refetch };
};

export default useQsetCursorQuery;
