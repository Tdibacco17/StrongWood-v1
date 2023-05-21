import { ProductInterface } from "@/types/Interfaces";
import styles from "./ProductCardComponent.module.scss"
import Image from "next/image";
import { useRouter } from "next/router";
import useImageLoading from "@/utils/img/useImageLoading";

export default function ProductCardComponent({
    product
}: {
    product: ProductInterface
}) {
    const imageUrl = product?.image?.imgSrc;
    const loading = useImageLoading(imageUrl);

    const router = useRouter()

    return (
        <div className={styles["container-section-product-card"]}
            data-id={`${product.productSlug}`}
            onClick={() => { router.push(`/products/${product.productSlug}`) }}
        >
            <div className={styles["container-overlay-image"]} />

            <div className={styles["container-outer-image"]}>
                {loading && (
                    <div className={styles["container-inner-placeholder"]}>
                        Cargando...
                    </div>
                )}
                {!loading && product && (
                    <div className={styles["container-inner-image"]}>
                        <Image
                            src={`${product.image.imgSrc}`}
                            alt={`${product.image.imgAlt}`}
                            fill
                            priority
                            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                )}
                {
                    product.offerPrice &&
                    <div className={styles["container-offer-percentage"]}>
                        <p className={styles["percentage"]}>
                            {`${product.offerPercentage} %`}
                        </p>
                    </div>
                }
            </div>
            <div className={styles["container-info-product"]}>
                <h4 className={styles["title-product"]}>{`${product.title}`}</h4>
                <div className={styles["price-product"]}>
                    <p className={styles["price"]}>
                        {`$ ${product.price}`}
                    </p>
                    <p className={styles["offer"]}>
                        {`${product.offerPrice ? "$ " + product.offerPrice : ""}`}
                    </p>
                </div>
            </div>
            <style jsx>{`
                .${styles["container-section-product-card"]} {
                    --price-line-through: ${product.offerPrice ? "line-through" : "none"};
                    --card-product-image-proportion: calc((var(--card-product-image-width)) * ${product.image.imgProportionsX});
                }
            `}</style>
        </div>
    )
}