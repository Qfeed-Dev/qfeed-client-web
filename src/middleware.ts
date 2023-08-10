import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const isLoggedIn = request.cookies.get("accessToken");
    if (!isLoggedIn) {
        return NextResponse.redirect(new URL("/account", request.url));
    }
}

export const config = {
    matcher: ["/((?!account|api|_next/static|_next/image|favicon.ico).*)"]
};
