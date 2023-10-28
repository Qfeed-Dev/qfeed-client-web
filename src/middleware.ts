import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { checkSignIn } from "./apis/auth/checkSignIn";

export async function middleware(request: NextRequest) {
    const token = request.cookies.get("accessToken")?.value;
    const userAgent = request.headers.get("User-Agent");

    if (!request.nextUrl.pathname.includes("/account")) {
        const requestHeaders = new Headers(request.headers);
        requestHeaders.set("Authorization", `Bearer ${token}`);

        return await checkSignIn(request);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|account|img|_next/static|_next/image|favicon.ico).*)"]
};
