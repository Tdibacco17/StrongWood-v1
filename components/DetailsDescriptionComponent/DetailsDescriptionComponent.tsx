import { ProductDetailContext } from "@/context/ProductDetailProvider";
import { ProductsDataContextInterface } from "@/types/Interfaces";
import { useContext } from "react";
import styles from "./DetailsDescriptionComponent.module.scss"

export default function DetailsDescriptionComponent() {
    const { productData } = useContext(
        ProductDetailContext
    ) as ProductsDataContextInterface;

    return (
        <div className={styles["container-section-description"]}>
            <h1 className={styles["description-title"]}>
                {productData?.detail?.description?.title}
            </h1>

            <div className={styles["container-description"]}>
                {
                    productData?.detail?.description?.itemsDescription?.map((item: string, index: number) => {
                        return (
                            <p className={styles["description-item"]} key={index}>
                                {item}
                            </p>
                        )
                    })
                }
            </div>
        </div>
    )
}