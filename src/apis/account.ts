import { defaultAxios, qFeedAxios } from "./axios";
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
    }
};

export default accountAPI;
