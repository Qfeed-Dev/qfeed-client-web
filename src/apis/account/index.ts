import { defaultAxios, qFeedAxios } from "../axios";
import { User } from "src/models/account";

const accountAPI = {
    async getAccessToken(code: string) {
        const response = await defaultAxios.get("/account/kakao/login", {
            params: {
                code: code,
                redirectUrl: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI
            }
        });
        return response.data;
    },
    async getUser() {
        const response = await qFeedAxios.get("/account/me");
        return response.data;
    },
    async patchUser(user: User) {
        const response = await qFeedAxios.patch("/account/me", { ...user });
        return response.data;
    },
    async getNickname(nickname: string) {
        const response = await defaultAxios.get("/account/check-nickname", {
            params: {
                nickname: nickname
            }
        });
        return response.data;
    },
    async getOtherUser(id: number) {
        const response = await qFeedAxios.get(`/account/${id}`);
        return response.data;
    },
    async getFollowings() {
        const response = await qFeedAxios.get("/account/me/followings");
        return response.data;
    },
    async getFollowers() {
        const response = await qFeedAxios.get("/account/me/followers");
        return response.data;
    },
    async createFollowing({ id }: { id: number }) {
        const response = await qFeedAxios.post(`/account/${id}/follow`);
        return response.data;
    },
    async deleteFollowing({ id }: { id: number }) {
        const response = await qFeedAxios.delete(`/account/${id}/unfollow`);
        return response.data;
    }
};

export default accountAPI;
