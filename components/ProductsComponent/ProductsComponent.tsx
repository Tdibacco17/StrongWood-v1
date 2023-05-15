import styles from "./ProductsComponent.module.scss"
import ProductCardComponent from "../ProductCardComponent/ProductCardComponent"
import Link from "next/link"
import { useContext, useEffect } from "react"
import { ProductsDataContextInterface } from "@/types/Interfaces"
import { ProductsContext } from "@/context/ProductsContextProvider"
import PlaceholderImageComponent from "../PlaceholderImageComponent/PlaceholderImageComponent"

export default function ProductComponent() {
    const { productsData } = useContext(
        ProductsContext
    ) as ProductsDataContextInterface

    return (
        <div className={styles["container-section-products"]}>
            <div className={styles["container-cards-products"]}>
                {productsData && Object.keys(productsData).length > 0 &&
                    (
                        Object.keys(productsData).map((productKey: string) => {
                            return (
                                <ProductCardComponent key={productKey} product={productsData[productKey]} />
                            );
                        })
                    )
                    //  : (
                    //     [...Array(10)].map((_, index) => {
                    //         return (
                    //             <div className={styles["container-outer-placeholder"]} key={index}>
                    //                 <PlaceholderImageComponent />
                    //             </div>
                    //         );
                    //     })
                    // )
                }
            </div>
        </div>
    )
}