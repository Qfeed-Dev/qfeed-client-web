import { useQuery } from "@tanstack/react-query";
import { followingKeys } from "src/constants/queryKeys/accountKeys";
import accountAPI from "src/apis/account";

const useUnFollowingsQuery = () => {
    const { data: unfollowings, isLoading } = useQuery<any>(
        followingKeys.all,
        accountAPI.getUnFollowings,
        {
            onError: (error: any) => {
                alert(error);
            }
        }
    );

    return { unfollowings, isLoading };
};

export default useUnFollowingsQuery;
