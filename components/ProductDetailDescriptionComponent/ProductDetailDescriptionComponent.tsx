import { ProductDetailContext } from "@/context/ProductDetailProvider";
import { ProductsDataContextInterface } from "@/types/Interfaces";
import { useContext } from "react";
import styles from "./ProductDetailDescriptionComponent.module.scss"

export default function ProductDetailDescriptionComponent() {
    const { productData } = useContext(
        ProductDetailContext
    ) as ProductsDataContextInterface;

    if (!(productData?.detail?.description)) {
        return <></>
    }

    return (
        <div className={styles["container-section-description"]}>

            <h1 className={styles["description-title"]}>DESCRIPCIÓN</h1>
            <h2 className={styles["description-subtitle"]}>
                {`${productData?.detail?.description?.title}`}
            </h2>

            <div className={styles["container-description"]}>
                {
                    productData?.detail?.description?.itemsDescription?.map((item: string, index: number) => {
                        return (
                            <p className={styles["description-item"]} key={index}>
                                {`${item}`}
                            </p>
                        )
                    })
                }
                {
                    productData?.detail?.description?.measures &&
                    <>
                        <p className={styles["description-item"]}>{`Medidas: ${productData.detail.description.measures}`}</p>
                    </>
                }
            </div>
        </div>
    )
}