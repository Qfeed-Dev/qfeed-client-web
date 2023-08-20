import { qFeedAxios } from "../axios";

export const getQuestions = async () =>
    await qFeedAxios
        .get("/questions")
        .then(({ data }) => data)
        .catch((err) => err.response);

export const getQuestionsId = async (id: number) =>
    await qFeedAxios
        .get(`/questions/${id}`)
        .then(({ data }) => data)
        .catch((err) => err.response);

export const getQuestionsIdChoices = async (id: number) =>
    await qFeedAxios
        .get(`/questions/${id}/choices`)
        .then(({ data }) => data)
        .catch((err) => err.response);
