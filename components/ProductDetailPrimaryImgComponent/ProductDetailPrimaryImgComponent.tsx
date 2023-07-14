import Image from "next/image"
import styles from "./ProductDetailPrimaryImgComponent.module.scss"
import { ImgDataInterface, ProductsDataContextInterface } from "@/types/Interfaces";
import { ProductDetailContext } from "@/context/ProductDetailProvider";
import { useContext } from "react";

export default function ProductDetailPrimaryImgComponent({
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
                            priority
                            sizes="(max-width: 768px) var(--card-details-image-mobile), var(--card-details-image-width)"
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