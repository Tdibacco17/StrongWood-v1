import { CustomStyles, ProductInterface } from "@/types/Interfaces";
import styles from "./ProductCardComponent.module.scss"
import Image from "next/image";

export default function ProductCardComponent({
    product
}: {
    product: ProductInterface
}) {
    const newValues: CustomStyles = {
        "--original-width": `${product.image.originalWidth}`,
        "--original-height": `${product.image.originalHeight}`,
        "--price-line-through": `${product.offerPrice ? "line-through" : "none"}`,
    };

    return (
        <div className={styles["container-section-product-card"]} style={newValues} data-id={`${product.productSlug}`}>
            <div className={styles["container-outer-image"]}>
                <div className={styles["container-inner-image"]}>
                    <Image
                        src={`${product.image.imgSrc}`}
                        alt={`${product.image.imgAlt}`}
                        fill
                        priority
                    />
                </div>
                <div className={styles["container-overlay-image"]} />
                {
                    product.offerPrice &&
                    <div className={styles["container-offer-percentage"]}>
                        <h6 className={styles["percentage"]}>
                            {`${product.offerPercentage} %`}
                        </h6>
                    </div>
                }
            </div>

            <div className={styles["container-info-product"]}>
                <h6 className={styles["title-product"]}>{`${product.title}`}</h6>
                <div className={styles["price-product"]}>
                    <h6 className={styles["price"]}>
                        {`$ ${product.price}`}
                    </h6>
                    <h6 className={styles["offer"]}>
                        {`${product.offerPrice ? "$ " + product.offerPrice : ""}`}
                    </h6>
                </div>
            </div>
        </div>
    )
}