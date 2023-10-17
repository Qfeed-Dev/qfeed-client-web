import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { checkUser } from "./checkUser";
import { checkSignIn } from "./checkSignIn";

export async function checkSignUp(request: NextRequest) {
    const user = await checkUser(request);
    const url = request.nextUrl.clone();
    const response = NextResponse.next();

    if (user.name && user.schoolType) {
        response.cookies.set({ name: "user", value: "true", path: "/" });
        return response;
    } else if (user.name) {
        url.pathname = "/auth/organization";
        return NextResponse.redirect(url);
    } else {
        url.pathname = "/auth/default";
        return NextResponse.redirect(url);
    }
}
