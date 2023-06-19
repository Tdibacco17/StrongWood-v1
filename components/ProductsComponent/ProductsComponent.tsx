import styles from "./ProductsComponent.module.scss"
import ProductsCardComponent from "../ProductsCardComponent/ProductsCardComponent"
import { useContext } from "react"
import { ProductsDataContextInterface } from "@/types/Interfaces"
import { ProductsContext } from "@/context/ProductsContextProvider"

export default function ProductsComponent() {
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
                                <ProductsCardComponent
                                    key={productKey}
                                    product={productsData[productKey]} />
                            );
                        })
                    )
                }
            </div>
        </div>
    )
}