import FooterComponent from "@/components/FooterComponent/FooterComponent";
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent";
import { DesignsProvider } from "@/context/DesignsContextProvider";
import { ProductsProvider } from "@/context/ProductsContextProvider";

import Head from "next/head";

export default function LayoutComponent({
    children,
    isSlider,
    urlBack
}: {
    children: React.ReactNode,
    isSlider: boolean,
    urlBack: string
}) {
    return (
        <>
            <Head>
                <title>Strong Wood</title>
                <meta name="description" content="Strong Wood" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv="Cache-Control" content="no-store" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <NavbarComponent isSlider={isSlider} urlBack={urlBack} />
                <main>
                    <ProductsProvider>
                        <DesignsProvider>
                            {children}
                        </DesignsProvider>
                    </ProductsProvider>
                </main>
                <FooterComponent />
            </div>
        </>
    )
}