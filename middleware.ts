import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {

    if (request.nextUrl.pathname.endsWith("/furniture")) {
        return NextResponse.redirect(new URL("/design", request.url));
    }


    if (request.nextUrl.pathname.endsWith("/contact")) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return
}