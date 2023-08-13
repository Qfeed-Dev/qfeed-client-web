import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const isLoggedIn = request.cookies.get("accessToken");
    const isSignUp = request.cookies.get("userId");
    if (!isLoggedIn) {
        return NextResponse.redirect(new URL("/account", request.url));
    }
    if (!isSignUp) {
        return NextResponse.redirect(new URL("/sign-up/default", request.url));
    }
}

export const config = {
    matcher: [
        "/((?!account|sign-up|api|_next/static|_next/image|favicon.ico).*)"
    ]
};
