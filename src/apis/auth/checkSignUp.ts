import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { checkUser } from "./checkUser";

export async function checkSignUp(request: NextRequest) {
    const user = await checkUser(request);
    const url = request.nextUrl.clone();

    if (user.name && user.schoolType) {
        url.pathname = "/";
        return NextResponse.redirect(url);
    } else if (user.name) {
        if (url.pathname !== "/auth/organization") {
            url.pathname = "/auth/organization";
            return NextResponse.redirect(url);
        } else return NextResponse.next();
    } else {
        return NextResponse.next();
    }
}
