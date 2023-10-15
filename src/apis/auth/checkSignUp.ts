import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { checkUser } from "./checkUser";
import { checkSignIn } from "./checkSignIn";

export async function checkSignUp(request: NextRequest) {
    const user = await checkUser(request);
    const url = request.nextUrl.clone();
    const { pathname } = request.nextUrl;

    if (pathname.match("/((?!account).*)")) {
        return await checkSignIn(request);
    }

    if (user.name && user.schoolType) {
        return NextResponse.next();
    } else if (user.name) {
        if (
            url.pathname !== "/auth/organization" &&
            url.pathname !== "/auth/default"
        ) {
            url.pathname = "/auth/organization";
            return NextResponse.redirect(url);
        } else return NextResponse.next();
    } else {
        if (url.pathname !== "/auth/default") {
            url.pathname = "/auth/default";
            return NextResponse.redirect(url);
        } else return NextResponse.next();
    }
}
