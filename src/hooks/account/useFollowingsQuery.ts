import { useQuery } from "@tanstack/react-query";
import { followingKeys } from "src/constants/queryKeys/accountKeys";
import accountAPI from "src/apis/account";

const useFollowingsQuery = (keyword: string) => {
    const {
        data: followings,
        isLoading,
        refetch
    } = useQuery<any>(
        followingKeys.all,
        () => accountAPI.getFollowings(keyword),
        {
            onError: (error: any) => {
                alert(error);
            }
        }
    );

    return { followings, isLoading, refetch };
};

export default useFollowingsQuery;
