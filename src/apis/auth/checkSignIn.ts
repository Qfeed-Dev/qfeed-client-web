import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { checkSignUp } from "./checkSignUp";

export async function checkSignIn(request: NextRequest) {
    const token = request.cookies.has("accessToken");
    const url = request.nextUrl.clone();
    const { pathname } = request.nextUrl;

    if (token) {
        if (!request.nextUrl.pathname.includes("/auth")) {
            const userToken = request.cookies.has("user");
            if (userToken) {
                return NextResponse.next();
            }
            // 최초진입인 경우 + 회원가입을 하지 않은 경우 + 하다만 경우
            else {
                return checkSignUp(request);
            }
        } else {
            return NextResponse.next();
        }
    } else {
        url.pathname = "/account";
        return NextResponse.redirect(url);
    }
}

export const config = {
    matcher: ["/((?!api|img|_next/static|_next/image|favicon.ico|account).*)"]
};
