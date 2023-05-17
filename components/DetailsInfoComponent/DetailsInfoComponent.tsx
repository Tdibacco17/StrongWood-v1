import { ProductDetailContext } from "@/context/ProductDetailProvider";
import { ProductsDataContextInterface } from "@/types/Interfaces";
import { useContext } from "react";
import styles from "./DetailsInfoComponent.module.scss"
import DetailsIconComponent from "../DetailsIconComponent/DetailsIconComponent";
import DetailsDescriptionComponent from "../DetailsDescriptionComponent/DetailsDescriptionComponent";

export default function DetailsInfoComponent() {
    const { productData } = useContext(
        ProductDetailContext
    ) as ProductsDataContextInterface;

    return (
        <div className={styles["container-section-info"]}>
            <div className={styles["container-info"]}>
                <h1 className={styles["product-title"]}>{productData?.title}</h1>

                <div className={styles["product-price"]}>
                    <p className={styles["info-price"]}>Precio:{` $${productData?.price}`}</p>
                    <p className={styles["info-offerPrice"]}>Precio oferta:{` $${productData?.offerPrice}`}</p>
                </div>
                <div className={styles["product-offerPercentage"]}>
                    <p className={styles["info-offerPercentage"]}>{` ${productData?.offerPercentage}% OFF`}</p>
                    <p className={styles["info-text"]}>DE DESCUENTO PAGANDO EN EFECTIVO</p>
                </div>
            </div>
            <div className={styles["container-section-icons"]}>
                <div className={styles["icons-info"]}>
                    <DetailsIconComponent imgSrc="/assets/icons/shippingCar.svg" />
                    <p className={styles["icons-title"]}>ENVÍOS GRATIS</p>
                    <p className={styles["icons-subtitle"]}>PARA COMPRAS DE MÁS DE $100</p>
                </div>
                <div className={styles["line-divider"]} />
                <div className={styles["icons-info"]}>
                    <DetailsIconComponent imgSrc="/assets/icons/creditCard.svg" />
                    <p className={styles["icons-title"]}>HASTA 12 CUOTAS SIN INTERÉS</p>
                    <p className={styles["icons-subtitle"]}>CON TODAS LAS TARJETAS DE CRÉDITO</p>
                </div>
            </div>
            <style jsx>
                {`
                .${styles["info-price"]} {
                    ${productData?.offerPrice ? "text-decoration: line-through;" : ""}    
                    }
                `}
            </style>
        </div>
    )
}