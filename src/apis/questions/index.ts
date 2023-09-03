import { QSet, Qtype } from "src/models/questions";
import { qFeedAxios } from "../axios";

export const getQuestions = async (offset: number, limit: number) => {
    const data = await qFeedAxios
        .get("/questions", {
            params: {
                offset: offset,
                limit: limit
            }
        })
        .then(({ data }) => data)
        .catch((err) => err.response);
    return { data: data, idx: offset };
};

export const postQuestions = async (body: any) =>
    await qFeedAxios
        .post("/questions", body)
        .then(({ data }) => data)
        .catch((err) => err.response);

export const postQuestionsIdChoices = async (questionId: any, choice: string) =>
    await qFeedAxios
        .post(`/questions/${questionId}/choices`, { value: choice })
        .then(({ data }) => data)
        .catch((err) => err.response);

export const getQsetCursor = async () => {
    const response = await qFeedAxios.get("/questions/q-set/today");
    return response.data;
};

export const createQset = async () => {
    const response = await qFeedAxios.post("/questions/q-set");
    return response.data;
};

export const createQuestionsQSet = async (userQsetId: number, choice: QSet) => {
    const response = await qFeedAxios.post(
        `/questions/q-set/${userQsetId}/choice`,
        { ...choice }
    );
    return response.data;
};

export const passQuestionsQSet = async (userQsetId: number) => {
    const response = await qFeedAxios.patch(
        `/questions/q-set/${userQsetId}/pass`
    );
    return response.data;
};

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

export const getUserQuestions = async (
    id: number,
    qtype: Qtype,
    offset: number,
    limit: number
) => {
    const response = await qFeedAxios.get(`/questions/user/${id}`, {
        params: {
            Qtype: qtype,
            offset: offset,
            limit: limit
        }
    });
    return response.data;
};
