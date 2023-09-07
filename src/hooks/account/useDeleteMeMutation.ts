import { useMutation, useQueryClient } from "@tanstack/react-query";
import accountAPI from "src/apis/account";

const useDeleteMeMutation = () => {
    const deleteMeMutation = useMutation(() => accountAPI.deleteMe(), {
        onSuccess: (data: any) => {},
        onError: (error: any) => {}
    });

    return {
        deleteMeMutation
    };
};

export default useDeleteMeMutation;
