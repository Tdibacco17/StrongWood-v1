import { ProductInterface } from "@/types/Interfaces";
import styles from "./ProductsCardComponent.module.scss"
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ProductsCardComponent({
    product
}: {
    product: ProductInterface
}) {
    const [imageLoaded, setImageLoaded] = useState(false);

    const router = useRouter()

    return (
        <div className={styles["container-section-product-card"]}
            data-id={`${product.productSlug}`}
            onClick={() => { router.push(`/products/${product.productSlug}`) }}>
            <div className={styles["container-outer-image"]}>
                {
                    !imageLoaded && (
                        <div className={styles["container-inner-placeholder"]}>
                            Cargando...
                        </div>
                    )
                }
                <div className={imageLoaded ? styles["container-inner-image"] : ""}>
                    <Image
                        src={`${product.image.imgSrc}`}
                        alt={`${product.image.imgAlt}`}
                        fill
                        loading="eager"
                        onLoadingComplete={() => { setImageLoaded(true) }}
                        style={{ opacity: imageLoaded ? "1" : "0" }}
                        sizes="(max-width: 768px) 100vw, var(--card-product-image)"
                    />
                </div>
                {
                    product.offerPrice && imageLoaded &&
                    <div className={styles["container-offer-percentage"]}>
                        <p className={styles["percentage"]}>
                            {`${product.offerPercentage} %`}
                        </p>
                    </div>
                }
            </div>
            <div className={styles["container-info-product"]}>
                {imageLoaded && <p className={styles["title-product"]}>{`${product.title}`}</p>}
                {imageLoaded && <div className={styles["price-product"]}>
                    <p className={styles["price"]}>
                        {`$ ${product.price}`}
                    </p>
                    <p className={styles["offer"]}>
                        {`${product.offerPrice ? "$ " + product.offerPrice : ""}`}
                    </p>
                </div>}
            </div>
            {/* <style jsx>{`
                .${styles["container-section-product-card"]} {
                    --price-line-through: ${product.offerPrice ? "line-through" : "none"};
                }
            `}</style> */}
        </div>
    )
}