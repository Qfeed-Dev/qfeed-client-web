import { qFeedAxios } from "../axios";

const chatAPI = {
    async getChatrooms() {
        const response = await qFeedAxios
            .get("/chatrooms")
            .catch((err) => err.response);
        return response.data;
    },

    async postChatroom(data: { targetUserId: number; title: string }) {
        const response = await qFeedAxios
            .post("/chatrooms", data)

            .catch((err) => err.response);

        return response.data;
    },

    async getChatroomChats(chatroomId: number) {
        const response = await qFeedAxios
            .get(`/chatrooms/${chatroomId}/chats`)
            .catch((err) => err.response);

        return response.data;
    },

    async postChatroomChats(chatroomId: any, message: string) {
        const response = await qFeedAxios
            .post(`/chatrooms/${chatroomId}/chats`, { message: message })
            .catch((err) => err.response);

        return response.data;
    }
};

export default chatAPI;
