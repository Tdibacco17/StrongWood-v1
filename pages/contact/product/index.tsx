import ContactContainer from "@/containers/ContactContainer/ContactContainer";
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
                <ContactContainer slug={infoProduct.productTitle} pay={infoProduct.paymenMethod} />
            </ProductDetailProvider>
        </LayoutComponent>
    )
}

/*
import { ContactContext, ContactProvider } from "@/context/ContactContextProvider";
import { ContactDataContextInterface } from "@/types/Interfaces";
import { useContext } from "react";

export default function FurnitureContactPage() {
    const { setInfoProduct, infoProduct } = useContext(
        ContactContext
    ) as ContactDataContextInterface;

    console.log("FURNITURE/CONTACT/", infoProduct)
    return (
        <div>
            {JSON.stringify(infoProduct)}
        </div>
    )
}


*/