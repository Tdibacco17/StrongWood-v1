import ContactProductContainer from "@/containers/ContactProductContainer/ContactProductContainer";
import { ContactContext } from "@/context/ContactContextProvider";
import { ProductDetailProvider } from "@/context/ProductDetailProvider";
import LayoutComponent from "@/layout/LayoutComponent";
import { ContactDataContextInterface } from "@/types/Interfaces";
import { useContext } from "react";
import BackLinkUrlComponent from "@/components/BackLinkUrlComponent/BackLinkUrlComponent";

export default function ContactProductPage() {

    const { infoProduct } = useContext(
        ContactContext
    ) as ContactDataContextInterface;

    if (infoProduct?.productSlug === "") {
        return (
            <LayoutComponent isSlider={false} urlBack={`products/`}>
                <BackLinkUrlComponent textData={"Ocurrió algo inesperado"} backUrl={"/products"} />
            </LayoutComponent>
        )
    }
    return (
        <LayoutComponent isSlider={false} urlBack={`products/${infoProduct?.productTitle}`}>
            <ProductDetailProvider>
                <ContactProductContainer
                    slug={infoProduct?.productSlug}
                    pay={infoProduct?.paymenMethod}
                    productPrice={infoProduct?.productPrice}
                />
            </ProductDetailProvider>
        </LayoutComponent>
    )
}