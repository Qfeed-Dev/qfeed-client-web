import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const isLoggedIn = request.cookies.get("accessToken");

    // request.headers.append("Authorization", `Bearer ${token}`);
    // console.log("내가만든헤더", request);
    if (
        !isLoggedIn &&
        pathname.match(
            "/((?!account|https://kauth.kakao.com/oauth/authorize).*)"
        )
    ) {
        return NextResponse.redirect(new URL("/account", request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|img|_next/static|_next/image|favicon.ico).*)"]
};
