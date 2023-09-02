import { qFeedAxios } from "../axios";

export const getChatrooms = async () =>
    await qFeedAxios
        .get("/chatrooms")
        .then(({ data }) => data)
        .catch((err) => err.response);

export const postChatroom = async (body: {
    targetUserId: number;
    title: string;
}) =>
    await qFeedAxios
        .post("/chatrooms", body)
        .then(({ data }) => data)
        .catch((err) => err.response);

export const getChatroomChats = async (chatroomId: any) =>
    await qFeedAxios
        .get(`/chatrooms/${chatroomId}/chats`)
        .then(({ data }) => data)
        .catch((err) => err.response);

export const postChatroomChats = async (
    chatroomId: any,
    body: {
        message: string;
    }
) =>
    await qFeedAxios
        .post(`/chatrooms/${chatroomId}/chats`, body)
        .then(({ data }) => data)
        .catch((err) => err.response);
