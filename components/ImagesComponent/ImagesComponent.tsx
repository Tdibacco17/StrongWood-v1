import { CustomStyles, ImgDataInterface } from "@/types/Interfaces";
import styles from "./ImagesComponent.module.scss"
import Image from "next/image";

export default function DetailImagesComponent({
    imgSlug,
    imgSrc,
    imgAlt,
    originalWidth,
    originalHeight,
    outerWidth,
    outerHeight,
}: {
    imgSlug: number,
    imgSrc: string,
    imgAlt: string,
    originalWidth: number,
    originalHeight: number,
    outerWidth: number,
    outerHeight: number,
}) {


    const newValues: CustomStyles = {
        "--original-width": `${originalWidth}`,
        "--original-height": `${originalHeight}`,
    };

    return (
        <>
            <div className={styles["container-outer-image"]} style={newValues} data-id={`${imgSlug}`}>
                <div className={styles["container-inner-image"]}>
                    <Image
                        src={`${imgSrc}`}
                        alt={`${imgAlt}`}
                        fill
                        priority
                    />
                </div>
                <div className={styles["container-overlay-image"]} />
            </div>
        </>
    )
}

/*
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
*/