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

let retries = 0;
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
            window.location.href = "/error";
        }

        switch (status) {
            case 401: {
                const token = getCookie();
                if (token) {
                    if (retries) {
                        deleteCookie();
                        window.location.href = "/account";
                    } else {
                        retries += 1;
                        config.headers.Authorization = `Bearer ${token}`;
                        const originalResponse = await axios.request(config);
                        return originalResponse;
                    }
                } else {
                    window.location.href = "/account";
                }
            }
            case 400:
            case 403:
            case 404:
            case 405:
            case 500:
            case 502:
            case 503:
                {
                    if (retries) {
                        window.location.href = "/error";
                    } else {
                        retries += 1;
                        const originalResponse = await axios.request(config);
                        return originalResponse;
                    }
                }
                return Promise.reject(error);
        }
    }
);
