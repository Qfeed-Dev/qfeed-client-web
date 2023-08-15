import type { NextRequest } from "next/server";
export const checkUser = async (request: NextRequest) => {
    const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + "/account/me",
        {
            headers: {
                Accept: "application / json",
                Authorization: `Bearer ${
                    request.cookies.get("accessToken")?.value
                }`
            },
            method: "GET"
        }
    );
    return response.json();
};
