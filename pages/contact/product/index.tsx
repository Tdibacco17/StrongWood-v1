import ContactProductContainer from "@/containers/ContactProductContainer/ContactProductContainer";
import { ContactContext } from "@/context/ContactContextProvider";
import { ProductDetailProvider } from "@/context/ProductDetailProvider";
import LayoutComponent from "@/layout/LayoutComponent";
import { ContactDataContextInterface } from "@/types/Interfaces";
import { useContext } from "react";

export default function ContactProductPage() {

    const { infoProduct } = useContext(
        ContactContext
    ) as ContactDataContextInterface;

    if (!infoProduct.productTitle) {
        // GUARDAR EN CACHE? O VALIDAR SI ALGUIEN TOCA F5
        return <>SE RECARGO LA PAGINA CON F5</>
    }

    return (
        <LayoutComponent isSlider={false} urlBack={`products/${infoProduct.productTitle}`}>
            <ProductDetailProvider>
                <ContactProductContainer slug={infoProduct.productTitle} pay={infoProduct.paymenMethod} />
            </ProductDetailProvider>
        </LayoutComponent>
    )
}