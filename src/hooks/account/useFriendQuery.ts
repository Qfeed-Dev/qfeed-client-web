import { useQuery } from "@tanstack/react-query";
import { friendKeys } from "src/constants/accountKeys";
import accountAPI from "src/apis/account";
import { User } from "src/models/account";

const useFriendQuery = (id: number) => {
    const { data: friend, isLoading } = useQuery<User>(
        friendKeys.detail(id),
        () => accountAPI.getFriend(id),
        {
            onError: (error: any) => {
                alert(error);
            }
        }
    );

    return { friend, isLoading };
};

export default useFriendQuery;
