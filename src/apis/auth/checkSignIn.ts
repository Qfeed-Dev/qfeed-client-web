import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { checkSignUp } from "./checkSignUp";

export async function checkSignIn(request: NextRequest) {
    const token = request.cookies.get("accessToken")?.value;
    const url = request.nextUrl.clone();
    const { pathname } = request.nextUrl;

    if (token) {
        return NextResponse.next();
    } else {
        url.pathname = "/account";
        return NextResponse.redirect(url);
    }
}

export const config = {
    matcher: ["/((?!api|img|_next/static|_next/image|favicon.ico|account).*)"]
};
