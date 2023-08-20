import axios, { AxiosInstance, AxiosError } from "axios";
import { getCookie, deleteCookie } from "src/utils/cookie";

export const defaultAxios: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    }
});

export const qFeedAxios: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        Authorization: `Bearer ${getCookie()}`,
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
        const {
            config,
            response: { status }
        } = error;

        if (error.isAxiosError) {
            // window.location.href = "/";
        }
        switch (status) {
            case 401: {
                const token = getCookie();
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                    const originalResponse = await axios.request(config);
                    return originalResponse;
                } else {
                    window.location.href = "/account";
                }
            }
            case 502:
            case 503:
                {
                    // window.location.href = "/";
                }
                return Promise.reject(error);
        }
    }
);
