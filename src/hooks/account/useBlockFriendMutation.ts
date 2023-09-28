import { useMutation } from "@tanstack/react-query";
import accountAPI from "src/apis/account";
import { useRouter } from "next/navigation";

const useBlockFriendMutation = () => {
    const router = useRouter();
    return useMutation((id: number) => accountAPI.blockFriend({ id }), {
        onSuccess: (data: any) => {
            router.back();
        },
        onError: (error: any) => {}
    });
};

export default useBlockFriendMutation;
