// import { postQuestions } from "src/apis/questions";

// const usePostQuestion = (body: any) => {
//     postQuestions(body);
// };

// export default usePostQuestion;

import { useMutation } from "@tanstack/react-query";
import { postQuestionsIdChoices } from "src/apis/questions";

const usePostQuestionsIdChoices = () => {
    const { mutate } = useMutation(
        ({ id, body }: any) => postQuestionsIdChoices(id, body),
        {
            onSuccess: () => {
                console.log("createPost success");
            },
            onError: () => {
                console.log("createPost error");
            }
        }
    );
    return { mutate };
};

export default usePostQuestionsIdChoices;
