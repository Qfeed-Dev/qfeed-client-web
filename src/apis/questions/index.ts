import { qFeedAxios } from "../axios";

export const getQuestions = async () =>
    await qFeedAxios
        .get("/questions")
        .then(({ data }) => data)
        .catch((err) => err.response);
