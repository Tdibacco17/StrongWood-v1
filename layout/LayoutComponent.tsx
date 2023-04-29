import FooterComponent from "@/components/FooterComponent/FooterComponent";
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent";
import styles from "./LayoutComponent.module.scss"

import Head from "next/head";

export default function LayoutComponent({
    children,
    isHomePage
}: {
    children: React.ReactNode,
    isHomePage: boolean
}) {
    return (
        <>
            <Head>
                <title>Strong Wood</title>
                <meta name="description" content="Strong Wood" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <NavbarComponent isHomePage={isHomePage} />
                {children}
                <FooterComponent />
            </main>
        </>
    )
}