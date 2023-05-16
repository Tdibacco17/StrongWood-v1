import { ProductDetailContext } from "@/context/ProductDetailProvider";
import { ProductsDataContextInterface } from "@/types/Interfaces";
import { useContext } from "react";
import styles from "./DetailsInfoComponent.module.scss"

export default function DetailsInfoComponent() {
    const { productData } = useContext(
        ProductDetailContext
    ) as ProductsDataContextInterface;

    return (
        <div className={styles["container-section-info"]}>
            <h1 className={styles["product-title"]}>{productData?.title}</h1>
            <div className={styles["container-info"]}>
                <p className={styles["info-item"]}>
                    Precio: {productData?.price}
                </p>
                {productData?.offerPrice && (
                    <p className={styles["info-item"]}>
                        Precio oferta: {productData?.offerPrice}
                    </p>
                )}
                {productData?.offerPercentage && (
                    <p className={styles["info-item"]}>
                        Descuento: {productData?.offerPercentage}%
                    </p>
                )}
            </div>
        </div>
    )
}