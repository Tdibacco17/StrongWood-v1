import FooterComponent from "@/components/FooterComponent/FooterComponent";
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent";
import { DesignsProvider } from "@/context/DesignsContextProvider";
import { ProductsProvider } from "@/context/ProductsContextProvider";

export default function LayoutComponent({
    children,
    isSlider,
    urlBack,
    buttonBack
}: {
    children: React.ReactNode,
    isSlider: boolean,
    urlBack: string,
    buttonBack: boolean
}) {
    return (
        <div>
            <NavbarComponent buttonBack={true} isSlider={isSlider} urlBack={urlBack} />
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