import { useQuery } from "@tanstack/react-query";
import { followingKeys } from "src/constants/queryKeys/accountKeys";
import accountAPI from "src/apis/account";

const useFollowingsQuery = () => {
    const { data: followings, isLoading } = useQuery<any>(
        followingKeys.all,
        accountAPI.getFollowings,
        {
            onError: (error: any) => {
                alert(error);
            }
        }
    );

    return { followings, isLoading };
};

export default useFollowingsQuery;
