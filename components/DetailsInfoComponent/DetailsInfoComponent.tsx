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
            <div className={styles["container-info"]}>
                <h1 className={styles["product-title"]}>{productData?.title}</h1>

                <>
                    <p className={styles["product-price"]}>
                        PRECIO:
                        <span className={styles["info-price"]}>
                            {`$${productData?.price}`}
                        </span>
                        <span className={styles["info-offerPrice"]}>
                            {`$${productData?.offerPrice}`}
                        </span>
                    </p>
                    {/* <p className={styles["info-text"]}>
                        <span className={styles["info-offerPercentage"]}>
                            {` ${productData?.offerPercentage}% OFF `}
                        </span>
                    </p> */}
                </>

            </div>
            <style jsx>
                {`
               .${styles["product-price"]} .${styles["info-price"]} {
                    ${productData?.offerPrice ? "text-decoration: line-through;" : ""}    
                    }
                `}
            </style>
        </div>
    )
}