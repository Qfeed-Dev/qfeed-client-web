import { Cookies } from "react-cookie";
const cookies = new Cookies();

export const setAccessToken = (accessToken: string, expires: string) => {
    return cookies.set("accessToken", accessToken, {
        path: "/",
        expires: new Date(expires)
    });
};

export const getCookie = () => {
    return cookies.get("accessToken");
};

export const deleteCookie = () => {
    return cookies.remove("accessToken", {
        path: "/"
    });
};
