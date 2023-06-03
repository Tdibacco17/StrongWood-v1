import Image from "next/image"
import styles from "./DetailsPrimaryImgComponent.module.scss"
import { ImgDataInterface, ProductsDataContextInterface } from "@/types/Interfaces";
import { ProductDetailContext } from "@/context/ProductDetailProvider";
import { useContext } from "react";

export default function DetailsPrimaryImgComponent({
    activeImage,
}: {
    activeImage: ImgDataInterface | undefined;
}) {
    const { productData } = useContext(
        ProductDetailContext
    ) as ProductsDataContextInterface;

    return (
        <div className={styles["container-outer-image"]}>
            {activeImage ? (
                <>
                    <div className={styles["container-inner-image"]}>
                        <Image
                            src={activeImage?.imgSrc}
                            alt={activeImage?.imgAlt}
                            fill
                        />
                    </div>
                    {
                        productData?.offerPrice &&
                        <div className={styles["container-offer-percentage"]}>
                            <p className={styles["percentage"]}>
                                {`${productData.offerPercentage} % OFF`}
                            </p>
                        </div>
                    }
                </>
            ) : (
                <div className={styles["container-inner-placeholder"]}>
                    Cargando...
                </div>
            )}
        </div>
    );
}