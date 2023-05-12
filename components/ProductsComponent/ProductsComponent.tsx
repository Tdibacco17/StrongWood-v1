import styles from "./ProductsComponent.module.scss"
import ProductCardComponent from "../ProductCardComponent/ProductCardComponent"
import Link from "next/link"
import { useContext, useEffect } from "react"
import { ProductsDataContextInterface } from "@/types/Interfaces"
import { ProductsContext } from "@/context/ProductsContextProvider"

export default function ProductComponent() {
    const { productsData } = useContext(
        ProductsContext
    ) as ProductsDataContextInterface

    useEffect(() => {
    }, [productsData]);

    return (
        <div className={styles["container-section-products"]}>
            <div className={styles["container-cards-products"]}>
                {productsData &&
                    Object.keys(productsData).map(
                        (productKey: string) => {
                            return (
                                <Link href={`/products/${productKey}`} key={`${productKey}`}>
                                    <ProductCardComponent product={productsData[productKey]} />
                                </Link>
                            )
                        }
                    )}
            </div>
        </div>
    )
}