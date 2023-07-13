import { NextRequest, NextResponse } from "next/server";
import { productsData } from "./models/products";
import { designData } from "./models/design";

const routes = [
    "/furniture/cocina",
    "/furniture/ba%C3%B1o",
    "/furniture/obras",
    "/furniture/dormitorio",
    "/furniture/oficina-e-industria",
    "/furniture/placares"
];

//REFACTORIZAR LO MAS POSIBLE

//if por un mismo lado y todo en bucles?

export function middleware(request: NextRequest) {
    const { pathname, searchParams } = new URL(request.url);

    if (pathname.endsWith("/furniture")) {
        return NextResponse.redirect(new URL("/design", request.url));
    }
    //furniture
    for (const route of routes) {
        if (pathname === route && searchParams) {
            const itemValue = searchParams.get("item");

            if (itemValue && itemValue.includes("/")) {
                return NextResponse.redirect(new URL("/design", request.url));
            }
        }
    }
    //furniture
    for (const route of routes) {
        if (pathname.startsWith(route + "/")) {
            const remainingPath = pathname.replace("/furniture/", "");
            const slug = remainingPath.split("/")[0];

            if (slug.length > 0 && remainingPath !== slug) {
                return NextResponse.redirect(new URL("/furniture", request.url));
            }
        }
    }

    if (pathname.startsWith("/furniture/")) {
        const remainingPath = pathname.replace("/furniture/", "");
        const slug = remainingPath.split("/")[0];
        const encodedSlug = encodeURIComponent(slug);

        if (encodedSlug.length > 0 && slug !== "ba%C3%B1o") {
            if (!designData.hasOwnProperty(encodedSlug)) {
                return NextResponse.redirect(new URL("/design", request.url));
            }
        }
    }

    if (pathname.startsWith("/products/")) {
        const remainingPath = pathname.replace("/products/", "");
        const slug = remainingPath.split("/")[0];

        if (slug.length > 0 && remainingPath !== slug) {
            return NextResponse.redirect(new URL("/products", request.url));
        }
    }

    if (pathname.startsWith("/products/")) {
        const productSlug = pathname.replace("/products/", "");
        const productExists = productsData.hasOwnProperty(productSlug);

        if (!productExists) {
            return NextResponse.redirect(new URL("/products", request.url));
        }
    }

    if (pathname.startsWith("/design/")) {
        const remainingPath = pathname.replace("/design/", "");
        const slug = decodeURIComponent(remainingPath);

        if (!(slug in designData)) {
            return NextResponse.redirect(new URL("/design", request.url));
        }
    }

    if (pathname.endsWith("/contact")) {
        return NextResponse.redirect(new URL("/", request.url));
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