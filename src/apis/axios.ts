import axios, { AxiosInstance, AxiosError } from "axios";
import { cookies } from "next/headers";
import { deleteCookie } from "src/utils/cookie";

export const qFeedAxios: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    }
});

qFeedAxios.interceptors.response.use(
    (response) => {
        if (
            !(
                response.status === 200 ||
                response.status === 201 ||
                response.status === 204
            )
        )
            throw new Error();
        if (response.data.errors) throw new Error(response.data.errors);
        return response;
    },
    async (error) => {
        const err = error as AxiosError;
        if (err.response?.status === 401) {
            deleteCookie();
            window.location.href = "/account";
        }
        return Promise.reject(error);
    }
);
