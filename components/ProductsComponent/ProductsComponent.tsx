import styles from "./ProductsComponent.module.scss"
import { productsData } from "@/models/products"
import ProductCardComponent from "../ProductCardComponent/ProductCardComponent"
import Link from "next/link"

export default function ProductComponent() {

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