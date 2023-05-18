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

                <p className={styles["info-text"]}>
                    PRECIO:
                    <span className={styles["info-price"]}>
                        {` $${productData?.price}`}
                    </span>
                </p>

                <p className={styles["info-text"]}>
                    PRECIO OFERTA:
                    <span className={styles["info-offerPrice"]}>
                        {` $${productData?.offerPrice}`}
                    </span>
                </p>

                <p className={styles["info-text"]}>
                    <span className={styles["info-offerPercentage"]}>
                        {` ${productData?.offerPercentage}% OFF `}
                    </span>
                    de descuento pagando en
                    <span className={styles["info-offerPercentage"]}>
                        {` EFECTIVO`}
                    </span>
                </p>
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