import FooterComponent from "@/components/FooterComponent/FooterComponent";
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent";
import { ProductsProvider } from "@/context/ProductsContextProvider";

import Head from "next/head";

export default function LayoutComponent({
    children,
    isSlider
}: {
    children: React.ReactNode,
    isSlider: boolean
}) {
    return (
        <>
            <Head>
                <title>Strong Wood</title>
                <meta name="description" content="Strong Wood" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <NavbarComponent isSlider={isSlider} />
                <main>
                    <ProductsProvider>
                        {children}
                    </ProductsProvider>
                </main>
                <FooterComponent />
            </div>
        </>
    )
}