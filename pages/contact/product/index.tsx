import ContactProductContainer from "@/containers/ContactProductContainer/ContactProductContainer";
import { ContactContext } from "@/context/ContactContextProvider";
import { ProductDetailProvider } from "@/context/ProductDetailProvider";
import LayoutComponent from "@/layout/LayoutComponent";
import { ContactDataContextInterface } from "@/types/Interfaces";
import Link from "next/link";
import { useContext } from "react";
import styles from "./index.module.scss"

export default function ContactProductPage() {

    const { infoProduct } = useContext(
        ContactContext
    ) as ContactDataContextInterface;

    if (!infoProduct.productTitle) {
        return (
            <LayoutComponent isSlider={false} urlBack={`products/`}>
                <div className={styles["container-link"]}>
                    <p>Ocurrió algo inesperado</p>
                    <Link className={styles["link"]} href={"/products"}>VOLVER</Link>
                </div>
            </LayoutComponent>
        )
    }
    return (
        <LayoutComponent isSlider={false} urlBack={`products/${infoProduct.productTitle}`}>
            <ProductDetailProvider>
                <ContactProductContainer slug={infoProduct.productTitle} pay={infoProduct.paymentMethod} />
            </ProductDetailProvider>
        </LayoutComponent>
    )
}