import { useQuery } from "@tanstack/react-query";

import accountAPI from "src/apis/account";
import { usersKeys } from "src/constants/accountKeys";

const useUsersQuery = (filter: string) => {
    const {
        data: users,
        isLoading,
        refetch
    } = useQuery<any>(usersKeys.all, () => accountAPI.getUsers(filter), {
        onError: (error: any) => {
            alert(error);
        }
    });

    return { users, isLoading, refetch };
};

export default useUsersQuery;
