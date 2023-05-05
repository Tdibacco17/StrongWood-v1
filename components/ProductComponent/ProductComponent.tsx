import React from "react"
import styles from "./ProductComponent.module.scss"
import { productsData } from "@/models/products"
import ProductCardComponent from "../ProductCardComponent/ProductCardComponent"

export default function ProductComponent() {

    return (
        <div className={styles["container-section-products"]}>
            <div className={styles["container-cards-products"]}>
                {productsData &&
                    Object.keys(productsData).map(
                        (productKey: string, index: number) => {
                            return (
                                <React.Fragment key={`${productKey}`}>
                                    <ProductCardComponent product={productsData[productKey]} />
                                </React.Fragment>
                            )
                        }
                    )}
            </div>
        </div>
    )
}