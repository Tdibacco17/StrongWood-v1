import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (pathname.endsWith("/furniture")) {
        return NextResponse.redirect(new URL("/design", request.url));
    }

    // FALTA VALIDACION DE FURNNITURE

    if (pathname.endsWith("/contact")) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    if (pathname.startsWith("/products/")) {
        const remainingPath = pathname.replace("/products/", "");
        const slug = remainingPath.split("/")[0];

        if (slug.length > 0 && remainingPath !== slug) {
            return NextResponse.redirect(new URL("/products", request.url));
        }
    }

    if (pathname.startsWith("/contact/")) {
        const remainingPath = pathname.replace("/contact/", "");
        const parts = remainingPath.split("/");

        if (parts[0] === "product") {
            const remainingParts = parts.slice(1);
            if (remainingParts.length > 0) {
                return NextResponse.redirect(new URL("/products", request.url));
            }
        } else if (parts[0] !== "design") {
            return NextResponse.redirect(new URL("/", request.url));
        }
    }

    if (pathname.startsWith("/contact/")) {
        const remainingPath = pathname.replace("/contact/", "");
        const parts = remainingPath.split("/");

        if (parts[0] === "design") {
            const remainingParts = parts.slice(1);
            if (remainingParts.length > 0) {
                return NextResponse.redirect(new URL("/design", request.url));
            }
        } 
        else if (parts[0] !== "product") {
            return NextResponse.redirect(new URL("/", request.url));
        }
    }

    return;
}