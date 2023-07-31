import { NextRequest, NextResponse } from "next/server";

const routesFurniture = [
    "/furniture/cocina",
    "/furniture/ba%C3%B1o",
    "/furniture/placares",
    "/furniture/dormitorio",
    // "/furniture/obras",
    // "/furniture/oficina-e-industria",
];

const routesDesign = [
    "placares", "cocina", "baño", "dormitorio",
    // "obras",
    // "oficina-e-industria", 
]

const fornitureItem = [
    "serie-nordica", "serie-new-york", "serie-premium", "serie-nova", "serie-de-luxe",
    "vanitory-new-york", "vanitory-escandinavo", "vanitory-nordico",
    "vestidor-de-luxe", "vestidor-fusion", "placard-UrbanWood",
    "comoda", "escritorio", "mesa-de-luz", "cama-individual", "cama-matrimonial"
];

const routesProducts = [
    "mesa-de-luz-roma", "mesa-cracovia", "mesa-ratona-edimburgo", "maceta-sintra", "maceta-avi%C3%B1on", "estanteria-siena", "estanteria-avila",
    "estanteria-bath", "estanteria-bergen", "llavero-corfu", "llavero-viena", "le%C3%B1ero", "rack-tv-cordoba", "toallero-matera", "toallero-cuenca",
    "bodega-segovia", "porta-copas", "porta-vinos", "escritorio-brujas", "perchero-oporto", "recibidor-salamanca", "tabla-asado", "soporte-auricular",
];

export function middleware(request: NextRequest) {
    const { pathname, searchParams } = new URL(request.url);
    // Verificar si la ruta tiene algo después de "/"

    //furniture
    if (pathname.endsWith("/furniture")) {
        return NextResponse.redirect(new URL("/design", request.url));
    }

    for (const route of routesFurniture) {
        if (pathname === route && searchParams) {
            const itemValue = searchParams.get("item");

            if (!itemValue || itemValue.trim().length === 0) {
                return NextResponse.redirect(new URL("/design", request.url));
            }

            if (itemValue && itemValue.includes("/")) {
                return NextResponse.redirect(new URL("/design", request.url));
            }

            if (itemValue && !fornitureItem.includes(itemValue)) {
                return NextResponse.redirect(new URL("/design", request.url));
            }
        }
    }

    for (const route of routesFurniture) {
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
            if (!routesDesign.includes(encodedSlug)) {
                return NextResponse.redirect(new URL("/design", request.url));
            }
        }
    }

    //products
    if (pathname.startsWith("/products/")) {
        const remainingPath = pathname.replace("/products/", "");
        const slug = remainingPath.split("/")[0];

        if (slug.length > 0 && remainingPath !== slug) {
            return NextResponse.redirect(new URL("/products", request.url));
        }
    }

    if (pathname.startsWith("/products/")) {
        const productSlug = pathname.replace("/products/", "");
        const productExists = routesProducts.includes(productSlug);

        if (!productExists) {
            return NextResponse.redirect(new URL("/products", request.url));
        }
    }

    //design
    if (pathname.startsWith("/design/")) {
        const remainingPath = pathname.replace("/design/", "");
        const slug = decodeURIComponent(remainingPath);

        if (!routesDesign.includes(slug)) {
            return NextResponse.redirect(new URL("/design", request.url));
        }
    }

    //contact
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

    return NextResponse.next();
}