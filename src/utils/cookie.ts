import { Cookies } from "react-cookie";
const cookies = new Cookies();

export const setAccessToken = (accessToken: string) => {
    const today = new Date();
    const expireDate = today.setDate(today.getTime() + 3 * 60 * 60 * 1000);

    return cookies.set("accessToken", accessToken, {
        expires: new Date(expireDate),
        path: "/"
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
