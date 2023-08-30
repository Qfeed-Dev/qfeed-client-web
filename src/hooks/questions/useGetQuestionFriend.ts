import { useQuery } from "@tanstack/react-query";
import { getQuestionsQSet } from "src/apis/questions";
import accountAPI from "src/apis/account";

const useGetQuestionFriend = () => {
    const {
        data: questionFriend,
        isLoading,
        refetch
    } = useQuery<any>(
        [],
        async () => {
            const accountFetch = await accountAPI.accountFetch();
            const questionsQSet = await getQuestionsQSet();
            return {
                questionsQSet,
                accountFetch
            };
        },
        {}
    );

    return { questionFriend, isLoading, refetch };
};

export default useGetQuestionFriend;
