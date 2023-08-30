import { Qtype } from "src/models/questions";
import { qFeedAxios } from "../axios";

export const getQuestions = async () =>
    await qFeedAxios
        .get("/questions")
        .then(({ data }) => data)
        .catch((err) => err.response);

export const postQuestions = async (body: any) =>
    await qFeedAxios
        .post("/questions", body)
        .then(({ data }) => data)
        .catch((err) => err.response);

export const postQuestionsIdChoices = async (questionId: any, body: any) =>
    await qFeedAxios
        .post(`/questions/${questionId}/choices`, body)
        .then(({ data }) => data)
        .catch((err) => err.response);

export const getQuestionsQSet = async () =>
    await qFeedAxios
        .get("/questions/q-set")
        .then(({ data }) => data)
        .catch((err) => err.response);

export const getQuestionsId = async (questionId: any) =>
    await qFeedAxios
        .get(`/questions/${questionId}`)
        .then(({ data }) => data)
        .catch((err) => err.response);

export const getQuestionsIdChoices = async (id: number) =>
    await qFeedAxios
        .get(`/questions/${id}/choices`)
        .then(({ data }) => data)
        .catch((err) => err.response);

export const getUserQuestions = async (id: number, qtype: Qtype) => {
    const response = await qFeedAxios.get(`/questions/user/${id}`, {
        params: {
            Qtype: qtype
        }
    });
    return response.data;
};
