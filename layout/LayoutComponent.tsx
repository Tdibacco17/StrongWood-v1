import FooterComponent from "@/components/FooterComponent/FooterComponent";
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent";
import { DesignsProvider } from "@/context/DesignsContextProvider";
import { ProductsProvider } from "@/context/ProductsContextProvider";

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
    )
}