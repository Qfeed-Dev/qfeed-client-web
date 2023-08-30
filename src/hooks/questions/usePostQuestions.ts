// import { postQuestions } from "src/apis/questions";

// const usePostQuestion = (body: any) => {
//     postQuestions(body);
// };

// export default usePostQuestion;

import { useMutation } from "@tanstack/react-query";
import { postQuestions } from "src/apis/questions";

const usePostQuestions = () => {
    const { mutate } = useMutation(({ body }: any) => postQuestions(body), {
        onSuccess: () => {
            console.log("createPost success");
        },
        onError: () => {
            console.log("createPost error");
        }
    });
    return { mutate };
};

export default usePostQuestions;
